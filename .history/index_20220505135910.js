require("./config");
const Database = require("./src/database");
const Server = require("./src/server/server");

const server = new Server(5000, "server is runing");
const db = new Database();

(async () => {
  try {
    await db.connect()
  } catch (e) {
    
  }
})();