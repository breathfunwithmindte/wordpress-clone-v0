const Field = require("./Types/Field");
const { nanoid } = require("nanoid");



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