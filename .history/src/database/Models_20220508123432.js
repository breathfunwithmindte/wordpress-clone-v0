const mongoose = require("mongoose");
const id = mongoose.Schema.Types.ObjectId;
const mixed = mongoose.Schema.Types.Mixed;

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

const ProjectDBSchema = new mongoose.Schema({
  product_schema: [FieldSchema],
  costumer_schema: [FieldSchema],
  order_schema: [FieldSchema],
  review_schema: [FieldSchema],
  blog_schema: [FieldSchema],
  comment_schema: [FieldSchema],
  category_schema: [FieldSchema],
  cart_schema: [FieldSchema]
})

const LogSchema = new mongoose.Schema ({
  log_type: { type: String, required: true, enum: ["error", "info", "warning", "fatal"] },
  log_message: String, log_details: { type: mixed}
}, { timestamps: true })

const PageSchema = new mongoose.Schema({
  name: String,
  use_db_collections: [String],
  use_single_field_query: String,
  use_db_collection_relative: [String],
  public: { type: Boolean, required: true, default: false },
  allow_search: { type: Boolean, required: true, default: false },
  autheticated: { type: Boolean, required: true, default: false },
  advanced_query: { type: String, required: true, default: "{}" }, // { queries: [ { collection: "costumers", query: { username: "Mike" } } ] }
  costum_script: String,
})

const ProjectSchema = new mongoose.Schema({
  name: String,
  database: { type: id, ref: "project-db", required: true },
  pages: [{ type: id, ref: "project-pages", required: true }]
})


exports["project_schema"] = ProjectSchema;
exports["page_schema"] = PageSchema;
