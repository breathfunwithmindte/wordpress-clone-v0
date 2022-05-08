const readd = require("fs").readdirSync;

log(readd(require("path").resolve() + "/src/Apis/" + global["config"]["APIS_VERSION"]))

// module.exports = apis;