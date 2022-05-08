const fs = require("fs");

module.exports = class PublicViewControl {
  static use = [
    { md: "get", m: "test", mdl: [],t: "json", p: "/test" },
    { md: "get", m: "test1", mdl: [],t: "json", p: "/test1" },
  ];


  getFiles () 
  {
    const dirnames = fs.readdirSync()
  }
  
}