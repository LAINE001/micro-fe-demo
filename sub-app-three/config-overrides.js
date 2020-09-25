module.exports = {
  webpack:(config)=>{
    //暴露的名称
    config.output.library = 'sub-app-three';
    //暴露的类型
    config.output.libraryTarget = 'umd';
    //暴露的静态资源端口
    config.output.publicPath = '/';
    return config
  },
  //本地配置
  devServer:(configFunction)=>{
    return function(proxy,allowedHost){
      const config=configFunction(proxy,allowedHost);
      //解决本地跨域
      config.headers={
        "Access-Control-Allow-Origin": '*'
      }
      return config;
    }
  }
}
