const { passport } = require("../Middlewares/Plugin_Authetication");



module.exports = class Plugin_Authetication {
  static use = [
    { md: "get", m: "autheticated", mdl: [passport], t: "json", p: "/api/v1/plugins/autheticated" },
  ];

  static async autheticated (req, res)
  {
   
  }

}