const webpackCfg = require("rnpx-webpack-config");
const pkg = require('./package.json');
const path = require('path');

// 路径
const srcPath = path.join(__dirname, './src')

const config = webpackCfg.getConfig({
  // 环境变量：dev,test,prd。默认test
  env: process.env.NODE_ENV === 'development' ? "dev" : process.env.GULP_ENV,
  // 模块索引规则
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '~': path.resolve(srcPath),
      commons: path.join(srcPath, 'commons'),
      components: path.join(srcPath, 'components'),
      entries: path.join(srcPath, 'entries'),
      images: path.join(srcPath, 'images'),
      styles: path.join(srcPath, 'styles'),
      utils: path.join(srcPath, "utils")
    }
  },
  // loaders
  loaders: [],
  // script加跨域头
  alterAssetTags: false,
  // 本地端口号
  port: pkg.port || '8000',
  // 输出指定目录
  filename: "index.html"
})
// 导出配置
module.exports = config;