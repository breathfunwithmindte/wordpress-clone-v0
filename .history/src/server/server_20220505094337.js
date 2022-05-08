const express = require("express");

module.exports = class Server {
  constructor (port, message) {
    this.app = express();
    this.app.listen(port, () => `${message}, port = ${port}`);
  }

  


}