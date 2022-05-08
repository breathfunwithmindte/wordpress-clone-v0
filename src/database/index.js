const ProjectUnit = require("./Project");
const DefaultFields = require("./DefaultFields");

module.exports = class Database {
  constructor() {
    this.url = config[URL];
    this.mongoose = require("mongoose");
    this.project_schema = require("./Models").project_schema;
    this.projectdb_schema = require("./Models").projectdb_schema;
    this.page_schema = require("./Models").page_schema;
    this.log_schema = require("./Models").log_schema;
  }

  async connect () {
    try{
      await this.mongoose.connect(this.url || "mongodb://localhost:27017/wordpress_clone");
      global["$Project"] = this.mongoose.model("Project", this.project_schema);
      global["$Page"] = this.mongoose.model("Page", this.page_schema);
      global["$Pdb"] = this.mongoose.model("Project-db", this.projectdb_schema);
      global["$Log"] = this.mongoose.model("system-logs", this.log_schema);

      const p = await $Project.findOne().populate("database");

      const project = new ProjectUnit(
        p.name,
        p.database.product_schema,
        p.database.costumer_schema,
        p.database.order_schema,
        p.database.review_schema,
        p.database.blog_schema,
        p.database.comment_schema,
        p.database.category_schema,
        p.database.cart_schema,
        p.database.product_quantity_schema,
        p._id
      );

      global["_proj"] = project;

      // p.blog_schema[0].field = "boolean";
      // p.save();

      // tests //
      // const $Product = project.Model("products");

      // console.log(await $Product.create({'test-field': "1"}))

      // console.log(project.review_schema)
      // const $Review = project.Model("reviews");
      // console.log(await $Review.create({ 'test-field-number': 5 }))

      // console.log(project.blog_schema)
      // const $Blog = project.Model("blogs");
      // console.log(await $Blog.create({ dsasd: "asdasd", 'test-field-boolean': "false" }))


      //console.log(project)
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