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
      super();
      this.field = this.setter(field, { datatypes: ["string"], name: "field" });
      this.name = this.setter(name, { datatypes: ["string"], name: "name" });
      this.minlength = this.setter(minlength, { datatypes: ["string"], name: "minlength" });
      this.maxlength = this.setter(maxlength, { datatypes: ["string"], name: "maxlength" });
      this.lowercase = this.setter(lowercase, { datatypes: ["string"], name: "lowercase" });
    }
}