const Field = require("./Field");
const mongoose = require("mongoose");

module.exports = class Project extends Type {
  /**
   * @param  {string} name
   * @param  {list<Field>} product_schema
   * @param  {list<Field>} costumer_schema
   * @param  {list<Field>} order_schema
   * @param  {import("mongoose").ObjectId} _id
   */
  constructor(name, product_schema, costumer_schema, order_schema, _id) {
    super();
    this.product_schema = product_schema.map(
      (p) => new Field(p._id.toString(), p.field, p.name, p.minlength, p.maxlength, p.required, p.lowercase, p.ref, p.array)
    );
    this.costumer_schema = costumer_schema.map(
      (p) => new Field(p._id.toString(), p.field, p.name, p.minlength, p.maxlength, p.required, p.lowercase, p.ref, p.array)
    );
    this.costumer_schema = order_schema.map(
      (p) => new Field(p._id.toString(), p.field, p.name, p.minlength, p.maxlength, p.required, p.lowercase, p.ref, p.array)
    );
    const c = this.Model("products");
    c.create({}).then(r => console.log(r)).catch(e => console.log(e.toString()));
    //  this.field = this.setter(null, { name: "jkasodajsd", datatypes: ["boolean", "null"], required: true });
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
    if(modelname === "order") return this.order_schema;
    return []
  }

  #getSchemaType (type) {
    switch (type) {
      case "string": return String;
      case "number": return Number;
      case "boolean": return Boolean;
      case "any": return mongoose.Schema.Types.Mixed;
      case "id": return mongoose.Schema.Types.ObjectId;
      default: return String;
    }
  }

};

// -> ip !!
