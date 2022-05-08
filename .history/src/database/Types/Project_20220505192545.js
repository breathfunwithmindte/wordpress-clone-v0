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
    //  this.field = this.setter(null, { name: "jkasodajsd", datatypes: ["boolean", "null"], required: true });
  }

  Costumer () {
    if(mongoose.modelNames().some(s => s === "costumers")) { mongoose.deleteModel("costumers") };
    let schema = new Object();
    this.costumer_schema.map(c => {
      if(c.array) {
        schema[c.name] = [{...c, type: #getSchemaType(c.field)}]
      }else {
        schema[c.name] = {...c, type: #getSchemaType(c.field)}
      }
      
    })
    console.log(schema)
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
