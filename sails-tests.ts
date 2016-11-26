import Sails = require(".");
const app = new Sails.constructor();
const routeName = "route1";
app.config.routes[routeName] = "Controller1.index";
