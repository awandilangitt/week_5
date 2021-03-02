const usersController = require("./usersController");
const tasksController = require("./tasksController");
const selesai = require("./selesai");

class Controller {
  users() {
    return usersController;
  }
  tasks() {
    return tasksController;
  }
  selesai() {
    return selesai;
  }
}

module.exports = Object.freeze(new Controller());
