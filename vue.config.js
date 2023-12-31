module.exports = {
  publicPath: './',
  configureWebpack: {
    devServer: {
      port: 8000,
      // open: true,
      host:"localhost",
      proxy: {
        '/api': {
          target: 'http://1.94.21.181:8888',
          ws: true,
          changeOrigin: true,
          pathRewrite:{
            '^/api': '/'
          }
        }
      }
    }
  }
};
