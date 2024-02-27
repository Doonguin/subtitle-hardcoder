const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: Path2D.resolve(__dirname, "./server/public"),
})
