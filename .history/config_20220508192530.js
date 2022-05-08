require("./src/utils/Type");
global["config"] = require("dotenv").config("./.env").parsed;

global["log"] = console.log;
global["root"] = require("path").resolve();

// hello world //