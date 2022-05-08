const express = require("express");

module.exports = class Server {
  /**
   * @param  {number} port
   * @param  {string} message
   */
  constructor (port, message) {
    console.log("hi")
    this.app = express();
    this.app.listen(port, () => `${message}, port = ${port}`);
  }

  


}