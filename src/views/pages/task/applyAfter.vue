<template>
  <div class="applyAfter">
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />
      {{ form.sale_type || '申请售后' }}
    </header>
    <main>
      <van-skeleton v-if="isloading" title avatar :row="5" />
      <div v-else class="wrapper">
        <div class="applyAfter_body">
          <!-- 图片 -->
          <img :src="entity.img" alt />
          <!-- 限量免单 -->
          <ul v-if="entity.module_type == 'free'">
            <li>{{entity.title}}</li>
            <li class="scale_num">订单编号：{{entity.order_sn}}</li>
            <li>
              <span>
                原价：
                <i>¥{{entity.price}}</i>
              </span>
            </li>
            <li>
              <span>
                实拍：
                <i>¥{{entity.reality_price}}</i>
              </span>
            </li>
            <li>
              <span>
                奖励积分：
                <i>{{entity.get_integral}}</i>
              </span>
            </li>
          </ul>
          <!-- 熊抢购 -->
          <ul v-else>
            <li>{{entity.title}}</li>
            <li class="scale_num">订单编号：{{entity.order_sn}}</li>
            <li v-if="entity.integral">抵扣积分：<i>{{entity.integral}}</i></li>
            <li>
              <span>
                优惠价：
                <i>¥{{entity.current_price}}</i>
              </span>
              <span>
                返利：
                <i>¥{{entity.price - entity.reality_price}}</i>
              </span>
            </li>
            <li>
              <span>
                原价：
                <i>¥{{entity.price}}</i>
              </span>
              <span>
                实拍：
                <i>¥{{entity.reality_price}}</i>
              </span>
            </li>
          </ul>
        </div>
        <van-cell-group>
          <van-field
            clearable
            readonly
            clickable
            label="申请原因"
            :value="form.sale_type"
            placeholder="请选择"
            @click="() => {
            if(!isEdit) showPicker = true
          }"
          />
          <van-cell v-if="form.sale_type == '资金问题'" class="uploads" title="实拍金额">
            <div class="_funds">
              ¥
              <van-stepper class="edit_stepper" v-model="form.reality_price" step="0.01" :decimal-length="2" min="0" />
              <br />
              任务金额: ¥ {{entity.price}}
              <br />
              差价金额: ¥ {{(form.reality_price - entity.price).toFixed(2) || 0}}
            </div>
          </van-cell>
          <van-field
            type="textarea"
            rows="1"
            autosize
            v-model="form.comment"
            label="售后说明"
            placeholder="请填写售后说明"
          />
          <van-cell class="uploads" title="售后凭证" label="（最多3张）">
            <van-uploader
              :after-read="afterRead"
              :before-delete="beforeDel"
              v-model="fileList"
              multiple
              :max-count="3"
            />
          </van-cell>
        </van-cell-group>

        <div class="submit_btn" @click="handleSubmit">提 交</div>
      </div>
    </main>

    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template> 
<script>
import { saleApply, uploadImg, deleteUpload } from "@/api/index";

export default {
  // 好评截图
  name: "applyAfter",
  components: {},
  data() {
    return {
      showPicker: false,
      isloading: false,
      columns: ["资金问题", "物流问题", "礼品问题", "其他"],
      fileList: [], // 图片
      form: { comment: "", sale_type: null, reality_price: null },
      _id: null,
      isEdit: false, // 是否可编辑
      entity: {}
    };
  },
  mounted() {
    if (this.$route.query.id) {
      this._id = this.$route.query.id;
    }
    if (this.$route.query.e) {
      this.isEdit = true;
    }
    this.getData();
  },
  methods: {
    async getData() {
      this.isloading = true;
      if (this.isEdit) {
        let res = await saleApply({
          action: 5,
          sale_id: this._id
        });
        if (res && res.error.errno == 200) {
          this.entity = res.saleInfo;
          // 表单设值
          this.form = {
            sale_type: this.columns[res.saleInfo.sale_type - 1],
            reality_price: res.saleInfo.reality_price,
            comment: res.saleInfo.comment
          };
          // 图片
          if(res.saleInfo.apply_img) {
            res.saleInfo.apply_img.map(el => {
              this.fileList.push({
                url: el
              });
            });
          }
        }
      } else {
        let res = await saleApply({
          action: 1,
          id: this._id
        });
        if (res && res.error.errno == 200) {
          this.entity = res.orderInfo;
          this.form.reality_price = res.orderInfo.reality_price;
        }
      }
      this.isloading = false;
    },
    onConfirm(value) {
      this.form.sale_type = value;
      this.showPicker = false;
    },
    // 前端上传之前处理
    afterRead(content) {
      if(content.length) {
        content.map(async el => {
          this.uploadAjax(el)
        })
      } else {
        this.uploadAjax(content)
      }
    },
    // 图片上传方法
    async uploadAjax(content) {
      let form = new FormData();
      form.append("img", content.file);
      let res = await uploadImg(form);
      if (res && res.error.errno == 200) {
        this.$toast.success("图片上传成功");
        content.url = res.url;
      }
    },
    async beforeDel(content) {
      let res = await deleteUpload({
        url: content.url
      });
      if (res && res.error.errno == 200) {
        this.$toast.success("图片删除成功");
        return true;
      }
    },
    // 提交按钮
    async handleSubmit() {
      if (!this.form.sale_type) return this.$toast.fail("请选择申请原因");
      if (
        this.form.sale_type == "资金问题" &&
        this.form.reality_price == this.entity.price
      )
        return this.$toast.fail("实拍价不能等于任务金额");

      let arr = [];
      let queryObj;
      this.fileList.map(el => {
        arr.push(el.url);
      });
      if (arr.length <= 0) return this.$toast.fail("请上传售后凭证");

      if (this.isEdit) {
        queryObj = {
          action: 6,
          sale_id: this._id,
          sale_type: this.columns.indexOf(this.form.sale_type) + 1,
          comment: this.form.comment,
          apply_img: arr
        };
      } else {
        queryObj = {
          action: 2,
          id: this._id,
          sale_type: this.columns.indexOf(this.form.sale_type) + 1,
          comment: this.form.comment,
          apply_img: arr
        };
      }

      if (queryObj.sale_type == 1) {
        queryObj.reality_price = this.form.reality_price;
      }
      let res = await saleApply(queryObj);
      if (res && res.error.errno == 200) {
        this.$toast.success(res.error.usermsg);
        setTimeout(() => {
          this.$router.push("/task");
        }, 500);
      }
    }
  }
};
</script>
<style lang="scss" scope>
.applyAfter {
  position: relative;
  width: 100%;
  padding-top: 40px;
  & > header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(-90deg, #fc5303 0%, #fa8e05 100%);
    text-align: center;
    font-size: 17px;
    color: #fff;
    .left_arrow {
      position: absolute;
      left: 15px;
      top: 10px;
      font-size: 20px;
    }
  }
  & > main {
    width: 100%;
    background: #fff;
    padding-bottom: 15px;
    .van-cell {
      padding-right: 0;
    }
    .uploads {
      .van-cell__value {
        flex: 3;
        text-align: left;
      }
    }
    .submit_btn {
      text-align: center;
      margin: 15px 0 15px 15px;
      font-size: 14px;
      color: #fff;
      width: 345px;
      height: 44px;
      line-height: 44px;
      background: linear-gradient(-90deg, #fc5603 0%, #fa8d05 100%);
      border-radius: 5px;
    }
    .applyAfter_body {
      padding: 20px 0 5px 15px;
      display: flex;
      & > img {
        width: 110px;
        height: 110px;
        border-radius: 5px;
        margin-right: 10px;
      }
      & > ul {
        flex: 1;
        height: 80px;
        margin-top: 10px;
        .scale_num {
          color: #999;
        }
        li {
          &:first-child {
            font-size: 13px;
            font-weight: bold;
          }
          height: 25%;
          display: flex;
          span {
            flex: 1;
          }
          i {
            color: #ff5500;
          }
        }
      }
    }
  }

  ._funds {
    color: #333;
    .edit_stepper {
      margin-bottom: 5px;
      border-bottom: 1px solid #ccc;
       .van-stepper__input {
        width: 100px !important;
      }
    }
    .van-stepper {
      display: inline-flex;
      .van-stepper__input {
        width: 45px;
      }
    }
    .van-stepper__minus,
    .van-stepper__plus {
      display: none;
    }
  }
}
</style>