module.exports = class TestController {
  static config = [
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
