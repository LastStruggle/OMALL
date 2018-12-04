module.exports = {
  devServer: {
    port: 8086,
    host: 'localhost',
    https: false, 
    open: true,
    proxy: {
      "/api": {
        "target": "https://m.msyc.cc/onionIndex/homePage",
        "changeOrigin": true,
        "pathRewrite":{
          "^/api":""
        }
      },
      "/apig": {
        "target": "https://m.msyc.cc/onionIndex/getguessYouLike"
        
      }
    }
  }
}