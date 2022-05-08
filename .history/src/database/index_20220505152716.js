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
      // await $Project.create({
      //   name: "testone", product_schema: [
      //     {
      //       field: "string", name: "title", required: true, minlength: 4, maxlength: 14
      //     }
      //   ], costumer_schema: [
      //     {
      //       field: "string", name: "description", minlength: 4, maxlength: 14 
      //     },
      //     {
      //       field: "number", name: "ages", default: 10
      //     },
      //     {
      //       field: "boolean", name: "isidiot", default: true
      //     }
      //   ], order_schema: [
      //     {
      //       field: "string", name: "title", required: true, minlength: 4, maxlength: 14
      //     },
      //     {
      //       field: "boolean", name: "send", default: false
      //     }
      //   ]
      // })
      console.log(await $Project.find(), "####")
    }catch(err){
      console.log(err);
    }
  }


}