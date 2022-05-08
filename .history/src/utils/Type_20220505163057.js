global["Type"] = class Type {
  constructor() {}
  
  setter(value, options) {
    if (!options) throw new Error("Options are required;");
    if (options instanceof Object === false)
      throw new Error("Options are bad formatted;");

    const { datatypes, minlength, maxlength, required, lowercase } = options;

    if(!datatypes.some(d => d === typeof value)) throw new Error(this.#setterError(0))
    if(typeof value === "string" && value.length < minlength) throw new Error(this.#setterError(-1))
    if(typeof value === "string" && value.length > maxlength) throw new Error(this.#setterError(-2))

    if(lowercase) return value.toLowerCase();

  }

  #setterError(status, { name, minlength, maxlength }={}) {
    switch (status) {
      case 0: return "is required";
      case -1: return "value is shorter than min length " + minlength;
      case -2: return "value is longer than max length " + maxlength;
      case -3: return `value has not right data type. Expected one of=>${datatype.join(",")}, but recieved`;
      default: return "Something went wrong.";
    }
  }
};
