const { defineConfig } = require('@vue/cli-service')
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/wisata': {
        target: 'http://192.168.0.107:8000',
        changeOrigin: true,
        secure: false
      }
    }
  }
};

