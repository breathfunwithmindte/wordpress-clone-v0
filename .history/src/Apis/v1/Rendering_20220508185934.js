module.exports = class Rendering {

  static use = [
    { md: "get", m: "primaryRender", mdl: [], t: "json", p: "/:pagename" },
    { md: "get", m: "primaryRenderSingle", mdl: [], t: "json", p: "/:pagename/:id" },
  ]

  static async homeRender (req, res, next)
  {
    // const data = new DataRender(...)
    res.render("testone/pages/index", { gstate: { domain: "hellow orld", project_name: "hi" } })
    //res.send("hello wrold from primary render..." + req.params.pagename)
  }

  static async primaryRender (req, res, next)
  {
    // const data = new DataRender(...)
    res.render("testone/pages/index", { gstate: { domain: "hellow orld", project_name: "hi" } })
    //res.send("hello wrold from primary render..." + req.params.pagename)
  }

  static async primaryRenderSingle (req, res, next)
  {
    // const data = new DataRender(...)
    res.send("hello wrold from primary render..." + req.params.pagename + req.params.id + "--  single")
  }

}