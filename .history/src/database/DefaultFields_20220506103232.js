const Field = require("./Types/Field");
const { nanoid } = require("nanoid");

exports["costumers_standard"] = [
  new Field(nanoid(8), "string", "first_name", 3, 34, false, true),
  new Field(nanoid(8), "string", "last_name", 3, 34, false, true),
  new Field(nanoid(8), "string", "email", 3, 255, false, true),
  new Field(nanoid(8), "string", "password", 3, 255, false, true),
  new Field(nanoid(8), "string", "username", 3, 255, false, true),
  new Field(nanoid(8), "string", "avatar", 3, 255, false, true),
  new Field(nanoid(8), "date", "birthday", undefined, undefined, false, true),
  new Field(nanoid(8), "location", "birthday", undefined, undefined, false, true),
]

exports["orders_standard"] = [
  new Field(nanoid(8), "id", "user", undefined, undefined, false, true),
  new Field(nanoid(8), "string", "first_name", 3, 34, false, true),
  new Field(nanoid(8), "string", "first_name", 3, 34, false, true),
]

console.log(exports["costumers_standard"]);

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