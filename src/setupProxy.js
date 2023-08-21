const proxy =require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy.createProxyMiddleware("/api1", {
      // REACT_APP_MNB_API_URL
      //target: "http://localwww.ibkbox.net:8081",
      target: process.env.REACT_APP_ENCAR_API_PATH,
      changeOrigin: true,
      secure: false,
      pathRewrite: {"^/api1": ""},
    })
  );
};
