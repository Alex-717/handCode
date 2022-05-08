const path = require('path')
const webpack = require('webpack')
const { srcPath, distPath } = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: path.join(srcPath, 'index.ts'),
  output: {
    filename: 'bundle.[contentHash:8].js', // name 即多入口时 entry 的 key
    path: distPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader?cacheDirectory'],
        include: srcPath,
        // exclude: /node_modules/
      },
      {
        //test指定的是规则生效的文件
        test: /\.ts$/,
        //要使用的loader
        use: [
          //配置babel
          {
            //指定加载器
            loader: "babel-loader",
            //设置babel
            options: {
              //设置预定义的环境
              presets: [
                [
                  //指定环境的插件
                  "@babel/preset-env",
                  //配置信息
                  {
                    //指定corejs的版本
                    "corejs": "3",
                    //使用corejs的方法 "usage"表示按需加载
                    // "useBuiltIns": "usage"

                  }

                ]
              ]
            }
          },
          "ts-loader",
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    port: 3000,
    progress: true,  // 显示打包的进度条
    contentBase: distPath,  // 根目录
    open: true,  // 自动打开浏览器
    compress: true  // 启动 gzip 压缩
  }
}
