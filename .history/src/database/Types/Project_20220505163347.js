const Field = require("./Field");

module.exports = class Project extends Type {
  /**
  * @param  {string} name
  * @param  {string} product_schema
  * @param  {number} costumer_schema
  * @param  {number} order_schema
  * @param  {import("mongoose").ObjectId} _id
  */
   constructor(field, name, minlength, maxlength, lowercase, comment, _id)
   {
     this.field = setter(field, { type: ["boolean"] });
    
   }
}