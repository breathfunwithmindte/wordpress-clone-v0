const Plugin_Authetication = require("../Middlewares/Plugin_Authetication");

console.log(Plugin_Authetication.passport, "@@")

const func = Plugin_Authetication.passport;

console.log(func, "!!")

module.exports = class Plugin_Authetication {
  static use = [
    { md: "get", m: "autheticated", mdl: [func], t: "json", p: "/api/v1/system/admin/auth/login" },
  ];

  static async autheticated (req, res)
  {

  }

}