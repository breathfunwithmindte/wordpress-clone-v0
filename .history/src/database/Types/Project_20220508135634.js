const Field = require("./Field");
const mongoose = require("mongoose");

module.exports = class Project extends Type {
  /**
   * @param  {string} name
   * @param  {list<import("./Field")>} product_schema
   * @param  {list<import("./Field")>} costumer_schema
   * @param  {list<import("./Field")>} order_schema
   * @param  {list<import("./Field")>} review_schema
   * @param  {list<import("./Field")>} blog_schema
   * @param  {list<import("./Field")>} comment_schema
   * @param  {list<import("./Field")>} category_schema
   * @param  {list<import("./Field")>} cart_schema
   * @param  {import("mongoose").ObjectId} _id
   */
  constructor(name,
    product_schema,
    costumer_schema,
    order_schema,
    review_schema,
    blog_schema,
    comment_schema,
    category_schema,
    cart_schema,
    _id) {
    super();
    this.product_schema = product_schema.map(
      (p) => new Field(p._id.toString(), p.field, p.name, p.default_value, p.minlength, p.maxlength, p.required, p.lowercase, p.ref, p.array)
    );
    this.costumer_schema = costumer_schema.map(
      (p) => new Field(p._id.toString(), p.field, p.name, p.default_value, p.minlength, p.maxlength, p.required, p.lowercase, p.ref, p.array)
    );
    this.order_schema = order_schema.map(
      (p) => new Field(p._id.toString(), p.field, p.name, p.default_value, p.minlength, p.maxlength, p.required, p.lowercase, p.ref, p.array)
    );
    this.review_schema = review_schema.map(
      (p) => new Field(p._id.toString(), p.field, p.name, p.default_value, p.minlength, p.maxlength, p.required, p.lowercase, p.ref, p.array)
    );
    this.blog_schema = blog_schema.map(
      (p) => new Field(p._id.toString(), p.field, p.name, p.default_value, p.minlength, p.maxlength, p.required, p.lowercase, p.ref, p.array)
    );
    this.comment_schema = comment_schema.map(
      (p) => new Field(p._id.toString(), p.field, p.name, p.default_value, p.minlength, p.maxlength, p.required, p.lowercase, p.ref, p.array)
    );
    this.category_schema = category_schema.map(
      (p) => new Field(p._id.toString(), p.field, p.name, p.default_value, p.minlength, p.maxlength, p.required, p.lowercase, p.ref, p.array)
    );
    this.cart_schema = cart_schema.map(
      (p) => new Field(p._id.toString(), p.field, p.name, p.default_value, p.minlength, p.maxlength, p.required, p.lowercase, p.ref, p.array)
    );
  }

  /**
   * @param  {string} modelname
   */
  Model (modelname) {
    try{
      if(mongoose.modelNames().some(s => s === modelname)) { mongoose.deleteModel(modelname) };
      let schema = new Object();
      this.#getArrayFields(modelname).map(c => {
        if(c.array) {
          schema[c.name] = [{...c, type: this.#getSchemaType(c.field)}]
          delete schema[c.name][0]["name"]; delete schema[c.name][0]["array"];
          if(schema[c.name][0]["field"] !== "id") { delete schema[c.name][0]["ref"] }
        }else {
          schema[c.name] = {...c, type: this.#getSchemaType(c.field)}
          delete schema[c.name]["name"]; delete schema[c.name]["array"];
          if(schema[c.name]["field"] !== "id") { delete schema[c.name]["ref"] }
        }
      })
      return mongoose.model(modelname, new mongoose.Schema(schema));
    }catch(err){
      throw err;
    }
  }

  #getArrayFields (modelname) {
    if(modelname === "costumers") return this.costumer_schema;
    if(modelname === "products") return this.product_schema;
    if(modelname === "orders") return this.order_schema;
    if(modelname === "reviews") return this.review_schema;
    if(modelname === "blogs") return this.blog_schema;
    if(modelname === "categories") return this.category_schema;
    if(modelname === "comments") return this.comment_schema;
    if(modelname === "carts") return this.cart_schema;
    return []
  }

  #getSchemaType (type) {
    switch (type) {
      case "string": return String;
      case "number": return Number;
      case "boolean": return Boolean;
      case "any": return mongoose.Schema.Types.Mixed;
      case "id": return mongoose.Schema.Types.ObjectId;
      case "image_url": return String;
      case "video_url": return String;
      default: return String;
    }
  }

};

// -> ip !!
