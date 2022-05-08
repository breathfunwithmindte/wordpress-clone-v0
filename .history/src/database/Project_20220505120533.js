module.exports = class Project {
  constructor()
  {
    this.name = String;
    this.product_schema = [
      {
        field: "string",
        name: "title",
        minlength: 3,
        maxlength: 4,
        required: true,
        default: "some value",
        lowercase: true
      }
    ]
    this.costumer_schema = [
      // ! same //  
    ]
    this.jwt_key = "string"
  }
}