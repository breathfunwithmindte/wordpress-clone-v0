const mongoose = require("mongoose");

const field_types = config["FIELD_TYPES"].split(",").map(i => i.trim())

const FieldSchema = new mongoose.Schema({
  field: { type: String, required: true, enum: field_types },
  name: { type: String, lowercase: true, minlength: 3, maxlength: 46 },
  default_value: { type: String, required: false },
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
  order_schema: [FieldSchema],
  review_schema: [FieldSchema],
  vlog_schema: [FieldSchema],
  blog_schema: [FieldSchema],
  comment_schema: [FieldSchema],
  category_schema: [FieldSchema],
  cart_schema: [FieldSchema]
})

const PageSchema = mongoose.Schema({
  name: String,
  queries: [ { name: String, value: String } ],
  allow_search: Boolean,
  script: String
})

const ApiSchema = new mongoose.Schema({
  name: String,
  script: String
})

exports["project_schema"] = ProjectSchema;
exports["page_schema"] = PageSchema;
exports["api_schema"] = ApiSchema;