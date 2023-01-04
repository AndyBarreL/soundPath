const { defineConfig } = require('@vue/cli-service');
const url = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: url,
        changeOrigin: true,
        pathRewrite: { '^/api' : '/' }
      }
    },
  },
})
