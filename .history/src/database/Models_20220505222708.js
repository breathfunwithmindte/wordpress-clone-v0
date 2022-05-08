const mongoose = require("mongoose");

const field_types = config["FIELD_TYPES"].split(",").map(i => i.trim())

const FieldSchema = new mongoose.Schema({
  field: { type: String, required: true, enum: field_types },
  name: { type: String, lowercase: true, minlength: 3, maxlength: 23 },
  minlength: Number,
  maxlength: Number,
  required: { type: Boolean, default: false },
  lowercase: { type: Boolean, default: false },
  ref: String,
  array: { type: Boolean, default: false }
})

const ProjectSchema = mongoose.Schema({
  name: String,
  product_schema: [FieldSchema],
  costumer_schema: [FieldSchema],
  order_schema: [FieldSchema]
})

exports["project_schema"] = ProjectSchema;