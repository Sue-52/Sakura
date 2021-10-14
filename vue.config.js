module.exports = {
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "dev" ? "./" : "/Sakura/",
  // publicPath: "./",
  devServer: {
    //配置服务器的，添加之后使用npm run dev会自动打开页面
    open: true,
  },
};
