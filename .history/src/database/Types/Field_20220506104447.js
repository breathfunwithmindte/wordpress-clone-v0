module.exports = class Field extends Type {
   /**
   * @param  {import("mongoose").ObjectId} _id
   * @param  {string} field
   * @param  {string} name
   * @param  {string} default_value
   * @param  {number} minlength
   * @param  {number} maxlength
   * @param  {boolean} required
   * @param  {boolean} lowercase
   * @param  {boolean} ref
   * @param  {boolean} array
   */
    constructor(_id, field, name, minlength, maxlength, default_value, required, lowercase, ref, array)
    {
      super();
      let lminlength = this.setter(minlength, { datatypes: ["number", "undefined"], name: "minlength" });
      let lmaxlength = this.setter(maxlength, { datatypes: ["number", "undefined"], name: "maxlength" });
      let lref = this.setter(ref, { datatypes: ["string", "undefined"], name: "ref" });
      let ldefault_value = this.setter(default_value, { datatypes: ["string", "undefined"] })

      console.log(_id, field, name, minlength, maxlength, default_value, required, lowercase, ref, array)
      return;

      this._id = this.setter(_id, { datatypes: ["string"], name: "_id" });
      this.field = this.setter(field, { datatypes: ["string"], name: "field", default_value: "string" });
      this.name = this.setter(name, { datatypes: ["string"], name: "name" });
      if(ldefault_value) this.default = ldefault_value;
      if(lminlength !== undefined) this.minlength = lminlength;
      if(lmaxlength !== undefined) this.minlength = lmaxlength;
      if(lref) this.ref = lref;
      this.required = this.setter(required, { datatypes: ["boolean"], name: "required", default_value: false });
      this.lowercase = this.setter(lowercase, { datatypes: ["boolean"], name: "lowercase", default_value: false });
      this.array = this.setter(array, { datatypes: ["boolean"], name: "array", default_value: false });
    }

}