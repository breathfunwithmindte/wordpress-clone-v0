const readd = require("fs").readdirSync;
const root_apis = root + "/src/Apis/" + global["config"]["APIS_VERSION"];
const apis = new Array();

readd(root_apis).map(f => {
  if(f.startsWith(".")) return;
  const controller = require(root_apis + "/" + f.substring(0, f.length - 3));
  apis.push(controller.use || [])
})

module.exports = apis;