global["Type"] = class Type {
  constructor() {}
  
  setter(value, options) {
    if (!options) throw new Error("Options are required;");
    if (options instanceof Object === false)
      throw new Error("Options are bad formatted;");

    const { datatypes, minlength, maxlength, required, lowercase } = options;
    const datatype_is_included = datatypes.some(d => d == typeof value);

    if(!datatypes || (datatypes instanceof Array === false)) throw new Error(this.#setterError(0)) 
    if(value === null) {
      if(datatypes.some(d => d === "null")) return null
      throw new Error(this.#setterError(-4, {datatypes, value}))
    }else {
      if(!datatype_is_included) throw new Error(this.#setterError(-4, {datatypes, value}))
      if(required === true && value === undefined) throw new Error(this.#setterError(-1))
      if(typeof value === "string" && value.length < minlength) throw new Error(this.#setterError(-2, {minlength}))
      if(typeof value === "string" && value.length > maxlength) throw new Error(this.#setterError(-3, {maxlength}))

      if(lowercase) return value.toLowerCase();
      if(datatype_is_included && !isNaN(Number(value))) return Number(value);
      return value;
    }
    

  }

  #setterError(status, { name, minlength, maxlength, datatypes, value }={}) {
    switch (status) {
      case 0: return "Datatype is an array and this property is required."
      case -1: return "is required";
      case -2: return "value is shorter than min length " + minlength;
      case -3: return "value is longer than max length " + maxlength;
      case -4: return `value has not right data type. Expected one of=>${datatypes.join(",")}, but recieved ${typeof value}`;
      default: return "Something went wrong.";
    }
  }
};
