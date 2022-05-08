const Field = require("./Field");

module.exports = class Project extends Type {
  /**
  * @param  {string} name
  * @param  {list<Field>} product_schema
  * @param  {list<Field>} costumer_schema
  * @param  {list<Field>} order_schema
  * @param  {import("mongoose").ObjectId} _id
  */
   constructor(name, product_schema, costumer_schema, order_schema, _id)
   {
     super();
     this.product_schema = this.setter(product_schema, {datatypes: ["object"]})
     //console.log(name, product_schema, costumer_schema, order_schema, _id)
     log(product_schema);
    //  this.field = this.setter(null, { name: "jkasodajsd", datatypes: ["boolean", "null"], required: true });
    
   }
}

// -> ip !!