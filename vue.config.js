module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    proxy: {
      "/hadis": {
        target: "http://api.carihadis.com",
        changeOrigin: true
      }
    }
  }
}
