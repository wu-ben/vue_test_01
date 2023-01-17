const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, /*关闭语法检查*/
  // 开启代理服务器 方式一
  // 缺点：
  // 1. 只能代理一个地址
  // 2. 先从public下找文件，找不到了才去所代理的服务器上找
  /* devServer: {
    proxy: 'http://localhost:5000'
  } */

  // 开启代理服务器 方式二
  /* devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        // 匹配开头为'/atguigu'的字符，替换为''
        pathRewrite: {'^/atguigu': ''},
        // 用于支持websocket，默认true
        // ws: true,
        // 设置代理服务器的端口，true显示为请求服务器的商品，false显示为本地服务器的端口
        // changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  } */

  /* pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    },
  } */
})
