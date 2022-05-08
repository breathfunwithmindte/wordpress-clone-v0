const Field = require("./Field");

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
      (p) => new Field(p._id.toString(), p.field, p.name, p.minlength, p.maxlength, p.required, p.lowercase, p.comment)
    );
    this.costumer_schema = costumer_schema.map(
      (p) => new Field(p._id.toString(), p.field, p.name, p.minlength, p.maxlength, p.required, p.lowercase, p.comment)
    );
    this.costumer_schema = order_schema.map(
      (p) => new Field(p._id.toString(), p.field, p.name, p.minlength, p.maxlength, p.required, p.lowercase, p.comment)
    );
    log(this)

    //  this.field = this.setter(null, { name: "jkasodajsd", datatypes: ["boolean", "null"], required: true });
  }
};

// -> ip !!
