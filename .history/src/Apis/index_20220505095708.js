const readd = require("fs").readdirSync;

log()

const root_apis = root + "/src/Apis/" + global["config"]["APIS_VERSION"];

readd(root_apis).map(f => {
  if(startsWith(".")) return;
  const controller = require(root_apis + "/" + f.substring(0, f.length - 3));
  console.log(controller)
})

// module.exports = apis;f