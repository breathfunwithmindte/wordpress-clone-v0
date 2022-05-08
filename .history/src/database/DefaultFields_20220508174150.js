const Field = require("./Types/Field");
const { nanoid } = require("nanoid");

exports["costumers_standard"] = [
  { _id: nanoid(8), name: "email", required: true, minlength: 5, maxlength: 255 },
  { _id: nanoid(8), name: "password", required: true, minlength: 5, maxlength: 255 },
  { _id: nanoid(8), name: "username", required: true, minlength: 5, maxlength: 255 },
  { _id: nanoid(8), name: "avatar", required: true, minlength: 5, maxlength: 2560 },
  { _id: nanoid(8), name: "fullname", required: true, minlength: 5, maxlength: 255 },
  { _id: nanoid(8), name: "active", required: true, field: "boolean", default_value: true },
  { _id: nanoid(8), name: "approved", required: true, field: "boolean", default_value: false },
  { _id: nanoid(8), name: "bravo", required: true, field: "string", array: true },
]

exports["products_standard"] = [
  { _id: nanoid(8), name: "product_name", required: true, minlength: 2, maxlength: 23 },
  { _id: nanoid(8), name: "category", field: "id", ref: "categories", required: true},
  { _id: nanoid(8), name: "price", field: "number", required: true },
  { _id: nanoid(8), name: "quantity", field: "number", required: true, default_value: 1 },
  { _id: nanoid(8), name: "details", field: "string-json", required: true, default_value: "{}" }
]

exports["categories_standard"] = [
  { _id: nanoid(8), name: "category_name", required: true, minlength: 2, maxlength: 23 },
  { _id: nanoid(8), name: "include_to_client", field: "boolean" },
]

const stages_enum = "open,delivering,preparing,closed-success,closed-error"

exports["orders_standard"] = [
  { _id: nanoid(8), name: "costumer", field: "reference", required: true, ref: "costumers" },
  { _id: nanoid(8), name: "payment_type", field: "enum-string", required: true, enum_arr: "credit card,paypal" },
  { _id: nanoid(8), name: "status", field: "enum-string", enum_arr: "pedding,paid", required: true },
  { _id: nanoid(8), name: "stages", field: "enum-string", enum_arr: stages_enum, required: true },
  { _id: nanoid(8), name: "taxes", field: "number", required: true, default_value: 0 },
  // this is actual EURO ++ add all productions discounts
  { _id: nanoid(8), name: "discount", field: "number", required: true, default_value: 0 }, 
  { _id: nanoid(8), name: "products", field: "id", required: true, ref: "products-quantities", array: true }
]

exports["reviews_standard"] = [
  { _id: nanoid(8), name: "product", field: "id", ref: "products" },
  { _id: nanoid(8), name: "costumer", field: "reference", ref: "costumers" },
  { _id: nanoid(8), name: "review_amount", field: "number", required: true },
  { _id: nanoid(8), name: "comment", field: "string", required: true, minlength: 14 },
]
exports["comments_standard"] = [
  { _id: nanoid(8), name: "post", field: "id", ref: "Blogs" },
  { _id: nanoid(8), name: "costumer", field: "reference", ref: "costumers" },
  { _id: nanoid(8), name: "comment", field: "string", required: true, minlength: 14 },
]

exports["blogs_standard"] = [
  { _id: nanoid(8), name: "title", field: "string", required: true, minlength: 5, maxlength: 255 },
  { _id: nanoid(8), name: "content", field: "string", required: true, minlength: 128, minlength: 5025 },
]

exports["carts_standard"] = [
  { _id: nanoid(8), name: "costumer", field: "reference", ref: "costumers" },
  { _id: nanoid(8), name: "products", field: "id", required: true, ref: "products-quantities", array: true },
]

exports["product_quantities_standard"] = [
  { _id: nanoid(8), name: "products", field: "id", required: true, ref: "products" },
  { _id: nanoid(8), name: "quantity", field: "string", required: true }
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