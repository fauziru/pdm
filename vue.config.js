module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    proxy: {
      "/hadis": {
        target: "http://api.carihadis.com",
        changeOrigin: true
      }
    },
    https: true,
  }
  // pwa: {
  //   // configure the workbox plugin
  //   workboxPluginMode: 'InjectManifest',
  //   workboxOptions: {
  //     swSrc: 'src/sw.js',
  //     swDest: 'dist/sw.js',
  //   }
  // }
}
