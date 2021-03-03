module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    publicPath: '/',
    outputDir: "dist",
    assetsDir: 'static',
    filenameHashing: true,
    devServer: {
      port: 53250,
      https: false
    }
}