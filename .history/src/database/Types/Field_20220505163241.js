module.exports = class Field extends Type {
   /**
   * @param  {string} field
   * @param  {string} name
   * @param  {number} minlength
   * @param  {number} maxlength
   * @param  {boolean} lowercase
   * @param  {boolean} comment
   * @param  {import("mongoose").ObjectId} _id
   */
    constructor(field, name, minlength, maxlength, lowercase, comment, _id)
    {
      this.field = setter(field, { type: ["boolean"] });
     
    }
}