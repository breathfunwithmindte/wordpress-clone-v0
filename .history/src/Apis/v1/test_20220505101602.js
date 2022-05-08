module.exports = class TestController {
  static use = [
    {
      md: "get",
      m: "test",
      mdl: [],
      type: "json",
      p: "/test",
    },
  ];

  static async test() {
    return "hello world";
  }
};
