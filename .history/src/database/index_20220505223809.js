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
      const project = new ProjectUnit();
      console.log(project)
    }catch(err){
      console.log(err);
    }
  }


}


// await $Project.deleteMany();
// await $Project.create({
//   name: "testone", product_schema: [ { field: "string", name: "test-field", default: "smth-default" } ],
//   costumer_schema: [{ field: "string", name: "test-field-arr", minlength: 3, array: true }],
//   order_schema: [
//     { field: "any", name: "test-field-obj" }
//   ],
//   review_schema: [
//     { field: "number", name: "test-field-number", minlength: 3, maxlength: 15, required: true, default: 15 }
//   ],
//   vlog_schema: [
//     { field: "string", name: "test-field-boolean", default: true }
//   ],
//   comment_schema: [
//     { field: "string", name: "test-field-minmax", minlength: 3, maxlength: 5 }
//   ],
//   category_schema: [
//     { field: "string", name: "test-field-boolean-empty" }
//   ],
//   cart_schema: [
//     { field: "string", name: "test-field-number-empty" }
//   ]
// })