const fs = require("fs");

module.exports = class Authetication {
  static use = [
    { md: "get", m: "login", mdl: [], t: "json", p: "/api/v1/system/admin/auth/login" },
    { md: "get", m: "autheticated",  mdl: [], t: "json", p: "/api/v1/system/admin/autheticated" },
  ];

  static async login (req, res) 
  {
    const dirnames = fs.readdirSync(root + "/views/");
    res.status(200).json({
      
    })
  }

  static async autheticated (req, res)
  {

  }

  
}