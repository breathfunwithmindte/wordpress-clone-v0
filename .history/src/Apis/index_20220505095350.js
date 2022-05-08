const readd = require("fs").readdirSync;

readd(require("path") + "/src/Apis/" + global["config"]["APIS_VERSION"])

// module.exports = apis;