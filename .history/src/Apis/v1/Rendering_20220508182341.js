module.exports = class Rendering {

  static use = [
    { md: "get", m: "primaryRender", mdl: [], t: "json", p: "/api/v1/:pagename" },
  ]


  static async primaryRender (req, res, next)
  {
    res.send("hello wrold from primary render..." + req.params.pagename)
  }

}