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

    res.render("home")
    return "hello world";
  }

  static async test1(req, res, next) {
    let str = fs.readFileSync(root + "/views/home.ejs").toString()
    if(str.search("hihihi") !== -1){
      str = str.replace("hihihi", "this is updated");
    }else{
      str = str.replace("this is updated", "hihihi");
    }
    fs.writeFileSync(root + "/views/home.ejs", str, (err, data) => {
      if(!err) {
        res.status(200).json({m: true})
      }else {
        console.log(err);
      }
    })

  }


};
