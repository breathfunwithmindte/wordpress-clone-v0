const readd = require("fs").readdirSync;

log()

const root_apis = root + "/src/Apis/" + global["config"]["APIS_VERSION"];

readd(root_apis).map(f => {
  const controller = require(root_apis + f);
  console.log(controller)
})

// module.exports = apis;f