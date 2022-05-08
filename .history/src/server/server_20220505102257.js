const express = require("express");
const apis = require("../Apis");
const router = express.Router();

module.exports = class Server {
  /**
   * @param  {number} port
   * @param  {string} message
   */
  constructor (port, message) {
    this.app = express();
    this.app.listen(port, () => console.log(`${message}, port = ${port}`));
    
    apis.map((api, index) => {
      log(api.use)
      
    })
    console.log(apis)

  }

  


}