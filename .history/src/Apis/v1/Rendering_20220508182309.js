module.exports = class Rendering {

  static use = [
    { md: "get", m: "autheticated", mdl: [passport], t: "json", p: "/api/v1/plugins/autheticated" },
  ]


  static async primaryRender (req, res, next)
  {
    res.send("hello wrold from primary render...")
  }

}