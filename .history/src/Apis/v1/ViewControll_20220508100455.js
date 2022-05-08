const fs = require("fs");

module.exports = class ViewControll {
  static use = [
    { md: "get", m: "getPages", mdl: [], t: "json", p: "/api/v1/admin/pages/read" },
    { md: "get", m: "getPage", mdl: [], t: "json", p: "/api/v1/admin/pages/read/:name" },
  ];

  /**
   * @doc fetch list of pages for current project
   */
  static getPages (req, res) 
  {
    const dirnames = fs.readdirSync(root + "/views/");
    res.status(200).json({
      
    })
  }

  /**
   * @doc read using fs some current view (.ejs file);
   */
  static getPage (req, res)
  {
    
  }

  /**
   * @doc update current page (details in db) + (file content)
   */
  static updatePages (req, res)
  {

  }

  static newPage (req, res)
  {

  }
  
}