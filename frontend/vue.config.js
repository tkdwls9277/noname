module.exports = {
  devServer: {
    // proxy: { // proxyTable 설정
    //   '/': {
    //     target: 'https://short-mice-happen-221-153-115-236.loca.lt/',
    //     changeOrigin: true,
    //     logLevel: 'debug', // 터미널에 proxy 로그가 찍힌다.
    //   }
    // }
    proxy: {
      '/': {
        "target": 'http://ec2-3-38-245-56.ap-northeast-2.compute.amazonaws.com/',
        "pathRewrite": {
          '^/': ''
        },
        "changeOrigin": true,
        "secure": false,
        "ws": false
      }
    }
  }
  // devServer: {
  //   proxy: 'https://short-mice-happen-221-153-115-236.loca.lt/'
  // }
}