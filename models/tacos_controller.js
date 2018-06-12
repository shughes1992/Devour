var orm = require("../config/orm.js");


var taco = {
    all: function(cb) {
      orm.all("tacos", function(res) {
        cb(res);
      });
    },
    create: function(name, cb) {
      orm.create("tacos", [
        "taco_name", "devoured"
      ], [
        name, false
      ], cb);
    },
    update: function(id, cb) {
      var condition = "id=" + id;
      orm.update("tacos", {
        devoured: true
      }, condition, cb);
    }
  };
  

  module.exports = taco;