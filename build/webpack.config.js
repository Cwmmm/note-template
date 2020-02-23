const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports={
  entry:'./src/index.js',
  output:{
    filename:'main.js'
  },
  devtool:process.env.NODE_ENV==='production'?false:'inline-source-map',
  devServer:{
    contentBase:'./dist',
    stats:'errors-only',
  },
  plugins:[
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:['./dist']
    }),
    new HtmlWebpackPlugin({
      title:'app'
    })
  ]
}