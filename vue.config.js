module.exports = {
  // 基本路径
  publicPath: './',
  //  构建时的输出目录
  outputDir: `dist2`,
  devServer: {
    host: '0.0.0.0',
    port: 4015,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/styles/base";`,
      },
    },
  },
}
