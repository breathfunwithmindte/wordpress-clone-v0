module.exports = class SysDebug {
  static use = [
    { md: "get", m: "project", mdl: [], t: "json", p: "/api/v1/system/admin/debug/project/whole" },
    { md: "get", m: "project_simple", mdl: [], t: "json", p: "/api/v1/system/admin/debug/project/simple" },
  ]

  static project (req, res) 
  {
    return res.status(200).json(_proj);
  }

  static project_simple (req, res)
  {
    let newobj = new Object();
    for (const key in _proj) {
      if (Object.hasOwnProperty.call(_proj, key)) {
        newobj[key] = _proj[key].map(i => `ID={${i._id}}, NAME={${i.name}}, TYPE={${i.field}}`)
      }
    }
    return res.status(200).json(newobj)
  }

}