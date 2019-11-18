const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: '',
    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    // 有效的值：`ture` | `false` | `"error"`
    // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
    lintOnSave: true,
    // babel-loader 默认会跳过 node_modules 依赖。
    // 通过这个选项可以显式转译一个依赖。
    transpileDependencies: [/* string or regex */],

    // 是否为生产环境构建生成 source map？
    productionSourceMap: false,

    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
    chainWebpack: config => {

    },
    configureWebpack: () => { },

    // CSS 相关选项
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
        extract: true,
        // 是否开启 CSS source map？
        sourceMap: false,
        // 为预处理器的 loader 传递自定义选项。比如传递给
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 37.5, // 换算的基数
                        // selectorBlackList: [".van"],// 要忽略的选择器并保留为px。
                        propList: ["*"], //可以从px更改为rem的属性。
                        // minPixelValue: 2 // 设置要替换的最小像素值。
                    }),
                ]
            }
        },

        // 为所有的 CSS 及其预处理文件开启 CSS Modules。
        // 这个选项不会影响 `*.vue` 文件。
        modules: false
    },

    // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
    // 在多核机器下会默认开启。
    parallel: require('os').cpus().length > 1,

    // 配置 webpack-dev-server 行为。
    devServer: {
        host: '0.0.0.0',
        port: 8899,
        https: false,
        open: false,
        proxy: {
            '/': {
                ws: false, // proxy websockets
                // target: 'http://106.54.237.151',
                // target: 'http://192.168.0.169:8123',
                target: 'http://192.168.0.145',
                changeOrigin: true
            }
        }
    },

    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            if (process.env.npm_lifecycle_event === 'analyze') {
                config.plugins.push(
                    new BundleAnalyzerPlugin()
                );
            }
        } else {
            // 为开发环境修改配置...
        }
    },

    // 第三方插件的选项
    pluginOptions: {

    }
}