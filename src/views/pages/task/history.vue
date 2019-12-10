<template>
  <div class="history">
    <van-image-preview v-model="showImg" :images="entity.apply_img" />
    <header>
      <van-icon class="left_arrow" name="arrow-left" @click="$router.go(-1)" />
      {{typeArr[entity.sale_type - 1]}}协商历史
    </header>
    <main>
      <van-cell :title="'是否完结：' + (entity.is_finish > 0 ? '是': '否') ">
        <span
          slot="right-icon"
          class="slotter"
          @click="$router.push('/historyRecord?id=' + $route.query.id)"
        >
          <span class="iconfont iconxiugaijilu"></span>
          <span>修改记录</span>
        </span>
      </van-cell>
      <van-cell>
        <ul class="fans_ul">
          <li>
            <span v-if="entity.platform == '2c'" class="isFans">粉丝：{{entity.mobile}}</span>
            <span v-else>商家：{{entity.account}}</span>

            <span style="color:#999">申请时间：{{entity.create_time}}</span>
          </li>
          <li class="flex_li" v-if="entity.sale_type == 1">
            <span>
              实拍金额：
              <i>¥{{entity.reality_price}}</i>
            </span>
            <span>
              任务金额：
              <i>¥{{entity.task_price}}</i>
            </span>
            <span>
              差价：
              <i>¥{{entity.differ_price}}</i>
            </span>
          </li>
          <li>处理说明：{{entity.comment}}</li>
          <!-- <li>售后说明：此商品存在{{ historyTitle }}问题</li> -->
          <li class="img_li">
            <span>凭证截图：</span>
            <img
              v-for="(item, k) in entity.apply_img"
              :key="k"
              :src="item"
              alt
              @click="showImg = true"
            />
          </li>
        </ul>
      </van-cell>

      <!-- 礼品，资金问题 -->
      <template v-if="entity.sale_type == 3 || entity.sale_type == 1">
        <van-cell v-if="entity.dispose_time">
          <ul class="sale_ul">
            <li v-if="entity.dispose_time">
              <span v-if="entity.sale_type == 3">平台：大淘客</span>
              <span v-else-if="entity.platform == '2b'" class="isFans">粉丝：{{entity.mobile}}</span>
              <span v-else>商家：{{entity.account}}</span>
              <span style="color:#999">处理时间：{{entity.dispose_time}}</span>
            </li>
            <li class="flex_li" v-if="entity.sale_type == 1">
              <span>
                实拍金额：
                <i>¥{{entity.reality_price}}</i>
              </span>
              <span>
                任务金额：
                <i>¥{{entity.task_price}}</i>
              </span>
              <span>
                差 价：
                <i>¥{{entity.differ_price}}</i>
              </span>
            </li>
            <!-- <li v-if="$route.query.type != 0">处理内容：{{ historyTitle }}错误</li> -->
            <li>处理说明：{{entity.info}}</li>
          </ul>
        </van-cell>
      </template>

      <!-- 物流，其他问题 -->
      <template v-else>
        <van-cell v-for="(item, k) in entity.logitics" :key="k">
          <ul class="sale_ul">
            <li>
              <span
                :class="{'isFans': item.platform == '2c'}"
              >{{item.platform == '2b' ? '商家' : '粉丝'}}：{{item.name}}</span>
              <span style="color:#999">处理时间：{{item.dispose_time}}</span>
            </li>
            <li>处理说明：{{item.info}}</li>
          </ul>
        </van-cell>
      </template>
    </main>
    <footer v-if="entity.platform == '2c' && (entity.sale_type == 2 || entity.sale_type == 4) && entity.is_finish == -1">
      <van-field
        v-model="msg"
        rows="2"
        autosize
        type="textarea"
        placeholder="请输入回复"
      />
      <van-button type="primary" @click="handleReplay">回 复</van-button>
    </footer>
  </div>
</template> 
<script>
import { saleHistory, saleApply } from "@/api/index";

export default {
  // 好评截图
  name: "history",
  components: {},
  data() {
    return {
      isloading: false,
      showImg: false,
      entity: {},
      typeArr: ["资金", "物流", "礼品", "其他"],
      msg: ""
    };
  },
  mounted() {
    this.getData()  
  },
  methods: {
    async getData() {
      this.isloading = true
      let res = await saleHistory({ id: this.$route.query.id });
      if (res && res.error.errno == 200) this.entity = res.salehistory;
      this.isloading = false
    },
    async handleReplay() {
      if (this.msg != "") {
        let res = await saleApply({
          sale_id: this.$route.query.id,
          dispose: null,
          action: 4,
          info: this.msg
        });
        if (res && res.error.errno == 200) {
          this.$toast.success(res.error.usermsg);
          this.msg = ""
          this.getData()
        }
      } else {
        this.$toast.fail("请填写回复信息");
      }
    }
  }
};
</script>
<style lang="scss" scope>
.history {
  position: relative;
  width: 100%;
  padding: 50px 0 100px 0;
  .isFans {
    color: #ff5500;
  }
  & > header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    height: 40px;
    line-height: 40px;
    background: #fff;
    text-align: center;
    font-size: 17px;
    .left_arrow {
      position: absolute;
      left: 15px;
      top: 10px;
      font-size: 20px;
    }
  }

  & > main {
    width: 100%;
    font-size: 12px;
    .slotter {
      display: flex;
      align-items: center;
      padding-right: 10px;
      i {
        font-size: 20px;
      }
    }
    .van-cell {
      padding-right: 0;
      margin-bottom: 10px;
    }
    .fans_ul,
    .sale_ul {
      li {
        &:first-child {
          display: flex;
          justify-content: space-between;
        }
        transform: scale(0.9);
        margin-left: -5%;
        padding: 4px 0;
      }
      .img_li {
        display: flex;
        align-items: flex-start;
        & > img {
          width: 90px;
          height: 90px;
          margin-right: 10px;
        }
      }
      .flex_li {
        display: flex;
        justify-content: space-between;
        i {
          font-size: 18px;
          color: #ff5500;
        }
      }
    }
  }

  & > footer {
    width: 100%;
    position: fixed;
    background: #fff;
    bottom: 0;
    text-align: center;
  }
}
</style>