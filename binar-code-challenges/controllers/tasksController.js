const db = require("../models");
class TasksController {
  async get(req, res) {
    const usersModel = db.users;
    const taslsModel = db.tasks;

    usersModel.hasMany(tasksModel);
    tasksModel.belongsto(usersModel, {foreignKey: "users_id"});


    const data = await db.tasks.findAll({ 
      attributes: ["id", "users_id", "description", "status"],
      include: [
        {
          model: usersModel,
          attributes: ["full_name"],
        },
      ],
     });
    res.json(data);
  }
  async post(req, res) {
    const users_id = req.body["users_id"];
    const description = req.body["description"];
    await db.tasks.create({
      users_id: users_id,
      description: description,
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send("sucess insert data " + users_id);
  }
  async put(req, res) {
    const description = req.body["description"];
    const status = req.body["status"];
    const id = req.body.id["id"];
    await db.tasks.update({ description: description, status: status }, { where: { id: id } });
    res.send("success update tasks with id " + id);
  }
  async delete(req, res) {
    const id = req.query["id"];
    await db.users.destroy({ where: { id: id } });
    res.send("sucess delete data from users with id " + id);
  }
}



// class TasksController {
//   get(req, res) {
//     res.send("routing untuk create tasks");
//   }
//   post(req, res) {
//     res.send("routing untuk read tasks");
//   }
//   put(req, res) {
//     res.send("routing untuk update tasks");
//   }
//   delete(req, res) {
//     res.send("routing untuk delete tasks");
//   }
// }

module.exports = Object.freeze(new TasksController());
