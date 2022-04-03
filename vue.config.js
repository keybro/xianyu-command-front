module.exports={
    devServer:{
        port:8080,
        open:true,
        proxy:{
            '/api':{
                target:'http://47.99.186.220:8880',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/api': ''
                }
            }
        }
    },
    //关掉又爱又恨的eslint
    lintOnSave:false
}