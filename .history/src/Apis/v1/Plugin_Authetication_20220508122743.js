const { passport } = require("../Middlewares/Plugin_Authetication");


const styles =  {
  bg0: "#1E1E1E",
  bg1: "#242428",
  bg2: "#45494E",
  clr: "#FFFFFF",
  clr1: "#E4E6D8",
  clr2: "#B8BBBF",
  h: "rgba(0,0,0,0.14)",
  hl: "rgba(255,255,255,0.23)",
  s: "",
  bclr: "rgba(0,0,0,0.86)",
  bclr1: "#45494E",
  p: "1.14rem",
  p1: "0.69rem",
  p2: "0.24rem",
  m: "0.69rem",
  m1: "0.14rem",
  pr: "#0A493A",
  pr1: "#09735A",
  pr2: "",
  pclr: "#FFFFFF",
  wpg: "calc(100vw - var(--whd))",
  whd: "297px"
};


module.exports = class Plugin_Authetication {
  static use = [
    { md: "get", m: "autheticated", mdl: [passport], t: "json", p: "/api/v1/plugins/autheticated" },
  ];

  static async autheticated (req, res)
  {
   
  }

}