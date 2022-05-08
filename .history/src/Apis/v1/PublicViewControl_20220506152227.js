const fs = require("fs");

module.exports = class PublicViewControl {
  static use = [
    { md: "get", m: "getFiles", mdl: [], t: "json", p: "/api/v1/public/pages/read" },
    { md: "post", m: "getFiles", mdl: [], t: "json", p: "/api/v1/public/pages/new" },
  ];


  static getFiles (req, res) 
  {
    const dirnames = fs.readdirSync(root + "/views/");
    res.status(200).json({
      
    })
  }
  
}