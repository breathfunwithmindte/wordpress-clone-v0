const readd = require("fs").readdirSync;

log()

const root_apis = root + "/src/Apis/" + global["config"]["APIS_VERSION"];

const api_builder = (path, controller) => {
  return { path, controller,  }
}

const apis = new Array();

readd(root_apis).map(f => {
  if(f.startsWith(".")) return;
  const controller = require(root_apis + "/" + f.substring(0, f.length - 3));
  log(controller.middleware)
  console.log(controller)
})

// module.exports = apis;f