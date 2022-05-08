const Plugin_Authetication = require("../Middlewares/Plugin_Authetication");

console.log(Plugin_Authetication.passport, "@@")

module.exports = class Plugin_Authetication {
  static use = [
    { md: "get", m: "autheticated", mdl: [Plugin_Authetication.passport], t: "json", p: "/api/v1/system/admin/auth/login" },
  ];

  static async autheticated (req, res)
  {

  }

}