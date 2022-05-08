const mongoose = require("mongoose");

const field_types = config["FIELD_TYPES"].split(",").map(i => i.trim())

const FieldSchema = new mongoose.Schema({
  field: { type: String, required: true, enum: field_types },
  name: { type: String, lowercase: true, minlength: 3, maxlength: 23 },
  minlength: { type: Number, required: true, default: 1 },
  maxlength: { type: Number, required: true, default: 24 },
  required: { type: Boolean, default: false },
  lowercase: { type: Boolean, default: false },
  ref: String,
  array: { type: Boolean, required: true, default: false }
})

const ProjectSchema = mongoose.Schema({
  name: String,
  product_schema: [FieldSchema],
  costumer_schema: [FieldSchema],
  order_schema: [FieldSchema]
})

exports["project_schema"] = ProjectSchema;