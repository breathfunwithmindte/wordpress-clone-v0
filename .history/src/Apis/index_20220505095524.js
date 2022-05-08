const readd = require("fs").readdirSync;

log()

readd(require("path").resolve() + "/src/Apis/" + global["config"]["APIS_VERSION"]).map(f => {
  const controller = require(f);
  console.log(controller)
})

// module.exports = apis;