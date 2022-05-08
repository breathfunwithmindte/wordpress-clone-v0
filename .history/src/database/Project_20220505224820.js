const Project = require("./Types/Project");

module.exports = class ProjectUnit extends Project {
  /**
   * @param  {string} name
   * @param  {list<import("./Field")>} product_schema
   * @param  {list<import("./Field")>} costumer_schema
   * @param  {list<import("./Field")>} order_schema
   * @param  {list<import("./Field")>} review_schema
   * @param  {list<import("./Field")>} vlog_schema
   * @param  {list<import("./Field")>} comment_schema
   * @param  {list<import("./Field")>} category_schema
   * @param  {list<import("./Field")>} cart_schema
   * @param  {import("mongoose").ObjectId} _id
   */
  constructor(
    name,
    product_schema,
    costumer_schema,
    order_schema,
    review_schema,
    vlog_schema,
    comment_schema,
    category_schema,
    cart_schema,
    _id
  ) {
    super(name, product_schema, costumer_schema, order_schema, review_schema, vlog_schema, comment_schema, category_schema, cart_schema, _id);
  }
};
