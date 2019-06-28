const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueloaderPlugin = require('vue-loader/lib/plugin.js')

module.exports ={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueloaderPlugin()
    ],
    // resolve:{
    //     alias:{     //第二种方式 修改呗导入包的路径
    //         "vue$":"vue/dist/vue.js"    
    //     }
    // },
    externals:{
        'mui':'mui'
    },
    module:{
        rules:[
            {test:/\.vue$/,use:'vue-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_module/},
            {test:/\.(jpeg|png|gif|bmp|jpg)$/,use:'url-loader?limit=123123&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.css/,use:["style-loader","css-loader"]}
        ]
    }
}