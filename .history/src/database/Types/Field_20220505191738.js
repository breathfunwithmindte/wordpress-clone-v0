module.exports = class Field extends Type {
   /**
   * @param  {import("mongoose").ObjectId} _id
   * @param  {string} field
   * @param  {string} name
   * @param  {number} minlength
   * @param  {number} maxlength
   * @param  {boolean} required
   * @param  {boolean} lowercase
   * @param  {boolean} comment
   */
    constructor(_id, field, name, minlength, maxlength, required, lowercase, ref, array)
    {
      super();
      this._id = this.setter(_id, { datatypes: ["string"], name: "_id" });
      this.field = this.setter(field, { datatypes: ["string"], name: "field" });
      this.name = this.setter(name, { datatypes: ["string"], name: "name" });
      this.minlength = this.setter(minlength, { datatypes: ["number"], name: "minlength" });
      this.maxlength = this.setter(maxlength, { datatypes: ["number"], name: "maxlength" });
      this.required = this.setter(required, { datatypes: ["boolean"], name: "required" });
      this.lowercase = this.setter(lowercase, { datatypes: ["boolean"], name: "lowercase" });
    }

}