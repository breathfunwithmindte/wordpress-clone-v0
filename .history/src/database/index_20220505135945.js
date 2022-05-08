module.exports = class Database {
  constructor() {
    this.url = config[URL];
    this.mongoose = require("mongoose");
    this.project_schema = require("./Models").project_schema;
  }

  async connect () {
    try{
      await this.mongoose.connect(this.url || "http://localhost:27017/wordpress_clone");
      global["$Project"] = this.mongoose.model("Project", project_schema);

      console.log(await $Project.find(), "####")
    }catch(err){

    }
  }


}