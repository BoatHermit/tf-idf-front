module.exports = {
  publicPath: './',
  configureWebpack: {
    devServer: {
      port: 8000,
      // open: true,
      host:"localhost",
      proxy: {
        '/api': {
          target: 'http://localhost:8888',
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
