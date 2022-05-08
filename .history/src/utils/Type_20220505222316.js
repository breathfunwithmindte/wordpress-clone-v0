global["Type"] = class Type {
  constructor() {}
  
  setter(value, options) {
    if (!options) throw new Error("Options are required;");
    if (options instanceof Object === false)
      throw new Error("Options are bad formatted;");

    const { datatypes, minlength, maxlength, required, lowercase, name } = options;
    const datatype_is_included = datatypes.some(d => d == typeof value);

    if(!datatypes || (datatypes instanceof Array === false)) throw new Error(this.#setterError(0)) 
    if(value === null) {
      if(datatypes.some(d => d === "null") && !required) return null
      throw new Error(this.#setterError(-5, {name}))
    }else {
      if(!datatype_is_included) throw new Error(this.#setterError(-4, {datatypes, value, name}))
      if(required === true && value === undefined) throw new Error(this.#setterError(-1, {name}))
      if(typeof value === "string" && value.length < minlength) throw new Error(this.#setterError(-2, {minlength, name}))
      if(typeof value === "string" && value.length > maxlength) throw new Error(this.#setterError(-3, {maxlength, name}))

      if(lowercase) return value.toLowerCase();
      if(datatype_is_included && (value === true || value === false)) return value;
      if(datatype_is_included && !isNaN(Number(value))) return Number(value);
      return value;
    }
    

  }

  #setterError(status, { name, minlength, maxlength, datatypes, value }={}) {
    switch (status) {
      case 0: return `${name}::` + "Datatype is an array and this property is required."
      case -1: return `${name}::` + "is required";
      case -2: return `${name}::` + "value is shorter than min length " + minlength;
      case -3: return `${name}::` + "value is longer than max length " + maxlength;
      case -4: return `${name}::` + `value has not right type of data. Expected one of=>${datatypes.join(",")}, but recieved ${typeof value}`;
      case -5: return `${name}::` + `value has not right type of data OR it is required. Recieved null.`
      default: return `${name}::` + "Something went wrong.";
    }
  }
};
