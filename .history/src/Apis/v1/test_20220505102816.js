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
    {
      md: "get",
      m: "test",
      mdl: [],
      t: "json",
      p: "/test",
    },
  ];

  static async test(req, res, next) {

    res.status(200).json({message: "hoo", nana: "asdasd"})
    return "hello world";
  }
};
