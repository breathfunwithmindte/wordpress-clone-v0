const ProjectUnit = require("./Project");

module.exports = class Database {
  constructor() {
    this.url = config[URL];
    this.mongoose = require("mongoose");
    this.project_schema = require("./Models").project_schema;
  }

  async connect () {
    try{
      await this.mongoose.connect(this.url || "mongodb://localhost:27017/wordpress_clone");
      global["$Project"] = this.mongoose.model("Project", this.project_schema);
    
      const project = new ProjectUnit(await $Project.findOne());
      
      
    }catch(err){
      console.log(err);
    }
  }


}