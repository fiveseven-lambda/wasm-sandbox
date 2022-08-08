const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, 'rust'),
      outDir: path.resolve(__dirname, 'pkg'),
    })
  ],
  experiments: {
    asyncWebAssembly: true,
  },
}