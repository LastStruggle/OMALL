module.exports = {
  devServer: {
    port: 8086,
    open: true,
    proxy: {
      "/api": {
        "target": "https://m.msyc.cc",
        "changeOrigin": true,
        "pathRewrite":{
          "^/api":""
        }
      }
    }
  }
}