const Plugin_Authetication = require("../Middlewares/Plugin_Authetication");

module.exports = class Plugin_Authetication {
  static use = [
    { md: "get", m: "login", mdl: [Plugin_Authetication.passport], t: "json", p: "/api/v1/system/admin/auth/login" },
  ];

  static async 

}