module.exports = {
    "/api/*": {
    "target": "http://localhost:3070",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    before() {
        console.log('----- before be call -----')
    }
  }
}