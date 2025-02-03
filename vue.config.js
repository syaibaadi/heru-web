const { defineConfig } = require('@vue/cli-service')
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/wisata': {
        target: 'http://103.179.56.241:8000',
        changeOrigin: true,
        secure: false
      }
    }
  }
};

