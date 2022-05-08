module.exports = class Plugin_CRM {
  
  static use = [
    { md: "get", m: "getCostumers", mdl: [passport], t: "json", p: "/api/v1/plugins/autheticated" },
  ];

  static async getCostumers ()
  {

    console.log(" get - costumers ")

  }

}