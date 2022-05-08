const express = require("express");
const controllers = require("../Apis");
const router = express.Router();

module.exports = class Server {
  /**
   * @param  {number} port
   * @param  {string} message
   */
  constructor (port, message) {
    this.app = express();
    this.app.listen(port, () => console.log(`${message}, port = ${port}`));
    
    controllers.map((controller, index) => {
      controller.use.map((api, ind) => {
        console.log(api.mdl)
        log(`using ${controller.name} ...setting api ... => path = ${api.p}`)
        router[api.md](api.p,  controller[api.m]);
      })
    })
    this.app.set("view engine", "ejs");
    this.app.use(router);
 
  }

  


}