const fs = require("fs");

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

module.exports = class SysAuthetication {
  static use = [
    { md: "get", m: "login", mdl: [], t: "json", p: "/api/v1/system/admin/auth/login" },
    { md: "get", m: "autheticated",  mdl: [], t: "json", p: "/api/v1/system/admin/autheticated" },
    { md: "get", m: "testtest",  mdl: [], t: "json", p: "/api/v1/system/admin/test" },
  ];

  static async login (req, res) 
  {
    const dirnames = fs.readdirSync(root + "/views/");
    res.status(200).json({
      
    })
  }

  static async testtest (req, res)
  {
    return res.status(200).json(global["response"])
  }

  static async autheticated (req, res)
  {
    res.status(200).json({
      user: {
        email: "Mike"
      },
      project: { theme: styles }
    })
  }

  
}