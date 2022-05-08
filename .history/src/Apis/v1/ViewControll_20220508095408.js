const fs = require("fs");

module.exports = class ViewControll {
  static use = [
    { md: "get", m: "getFiles", mdl: [], t: "json", p: "/api/v1/admin/pages/read" },
    { md: "get", m: "setFiles", mdl: [], t: "json", p: "/api/v1/admin/pages/new" },
  ];


  static getFiles (req, res) 
  {
    const dirnames = fs.readdirSync(root + "/views/");
    res.status(200).json({
      
    })
  }
  
}