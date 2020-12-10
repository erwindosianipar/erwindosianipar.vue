module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Erwindo Sianipar'
        return args
      })
  }
}
