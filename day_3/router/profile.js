const router = require("express"). Router();
const profileController = require("../controllers/profileController.js");

router.get("/home", profileController.home);

router.get("/all", profileController.all);

router.get("/find", profileController.find);

// router.get("/artikel/:id?", (req, res) => {
//     const id = req.params.id ? req.params.id :"";
//     res.send("ini page artikel dari page profile" + id);
// });

router.get("/news", (req,res) =>res.send("ini page dari page profile"));

module.exports = router;
