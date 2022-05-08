const ProjectUnit = require("./Project");
const DefaultFields = require("./DefaultFields");

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
      const p = await $Project.findOne();
      const project = new ProjectUnit(
        p.name,
        p.product_schema,
        p.costumer_schema,
        p.order_schema,
        p.review_schema,
        p.blog_schema,
        p.comment_schema,
        p.category_schema,
        p.cart_schema,
        p._id
      );

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

      console.log(project.cart_schema)
      const $Blog = project.Model("carts");
      console.log(await $Blog.create({  }))

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