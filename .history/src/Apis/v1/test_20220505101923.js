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

  static async test() {
    return "hello world";
  }
};
