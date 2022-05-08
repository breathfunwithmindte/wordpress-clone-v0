const Field = require("./Types/Field");
const { nanoid } = require("nanoid");

exports["costumers_standard"] = [
  { _id: nanoid(8), name: "" }
]

exports["products_standard"] = [
  { _id: nanoid(8), name: "product_name", minlength: 2, maxlength: 23 },
  { _id: nanoid(8), name: "category", field: "id", ref: "categories"},
]

exports["categories_standard"] = [

]

// exports["costumers_standard"] = [
//   new Field(nanoid(8), "string", "first_name", undefined, 3, 34),
//   new Field(nanoid(8), "string", "last_name", undefined, 3, 34),
//   new Field(nanoid(8), "string", "email", 3, undefined, 255, true, true),
//   new Field(nanoid(8), "string", "password", undefined, 3, 255, true, true),
//   new Field(nanoid(8), "string", "username", undefined, 3, 255),
//   new Field(nanoid(8), "string", "avatar", undefined, 3, 255),
//   new Field(nanoid(8), "date", "birthday"),
//   new Field(nanoid(8), "location", "birthday"),
// ]

// exports["orders_standard"] = [
//   new Field(nanoid(8), "id", "user", undefined),
//   new Field(nanoid(8), "number", "total", 0),
//   new Field(nanoid(8), "number", "amount", 0),
//   new Field(nanoid(8), "number", "quantity", 0),
// ]

// exports["categories_standard"] = [
//   new Field(nanoid(8), "string", "name", undefined, 3, 34),
//   new Field(nanoid(8), "string", "short_description", undefined, 3, 255),
//   new Field(nanoid(8), "json-string", "details", undefined, 3, 3400),
//   new Field(nanoid(8), "string", "description", undefined, 3, 3400),
//   new Field(nanoid(8), "number", "price", 0, undefined, undefined, true),
// ]

// location: {
//   type: {
//     type: String, // Don't do `{ location: { type: String } }`
//     enum: ['Point'], // 'location.type' must be 'Point'
//     required: true
//   },
//   coordinates: {
//     type: [Number],
//     required: true
//   }
// }