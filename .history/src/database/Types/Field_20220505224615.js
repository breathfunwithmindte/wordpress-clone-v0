module.exports = class Field extends Type {
   /**
   * @param  {import("mongoose").ObjectId} _id
   * @param  {string} field
   * @param  {string} name
   * @param  {number} minlength
   * @param  {number} maxlength
   * @param  {boolean} required
   * @param  {boolean} lowercase
   * @param  {boolean} ref
   * @param  {boolean} array
   */
    constructor(_id, field, name, minlength, maxlength, required, lowercase, ref, array)
    {
      super();
      let lminlength = this.setter(minlength, { datatypes: ["number", "undefined"], name: "minlength" });
      let lmaxlength = this.setter(maxlength, { datatypes: ["number", "undefined"], name: "maxlength" });
      let lref this.setter(ref, { datatypes: ["string", "undefined"], name: "ref", default_value: "users" });

      this._id = this.setter(_id, { datatypes: ["string"], name: "_id" });
      this.field = this.setter(field, { datatypes: ["string"], name: "field", default_value: "string" });
      this.name = this.setter(name, { datatypes: ["string"], name: "name" });
      if(lminlength !== undefined) this.minlength = lmaxlength;
      if(maxlength !== undefined) this.minlength = lmaxlength;
      this.required = this.setter(required, { datatypes: ["boolean"], name: "required" });
      this.lowercase = this.setter(lowercase, { datatypes: ["boolean"], name: "lowercase" });
      this.ref = ;
      this.array = this.setter(array, { datatypes: ["boolean"], name: "array" });
    }

}