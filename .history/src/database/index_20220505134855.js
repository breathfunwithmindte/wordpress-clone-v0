module.exports = class Database {
  constructor() {
    this.url = config[URL];
    this.mongoose = require("mongoose");
  }

  connect () {
    await this.mongoose.connect(this.url || "http://localhost:27017/wordpress_clone");
  }


}