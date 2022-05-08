module.exports = class TestController {
  static configs = [
    {
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
