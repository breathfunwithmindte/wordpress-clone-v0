const fs = require("fs");

module.exports = class TestController {

  /**
   * list<object>
   * md: http method
   * m: controller method
   * p: path
   * t: response type
   * mdl: list of middlewares
   */
  static use = [
    { md: "get",m: "test", mdl: [],t: "json", p: "/test" },
    { md: "get",m: "test1", mdl: [],t: "json", p: "/test1" },
  ];

  static async test(req, res, next) {

    res.render("")
    return "hello world";
  }

  static async test1(req, res, next) {
    let str = fs.readFileSync(root + "/views/home.ejs").toString()
    if(str.search("hihihi") !== -1){
      str = str.replace("hihihi", "this is updated");
    }else{
      str = str.replace("this is updated", "hihihi");
    }

    res.status(200).json({m: str.match("")[0]})
    return "hello world";
  }


};



console.log(str)
console.log(str.match(/<body>((\n.*?)*)<\/body>/gm), "@@")