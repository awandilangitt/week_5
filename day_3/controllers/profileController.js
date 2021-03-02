const ProfileModel = require("../model/profileModel");

class ProfileController {
    home(req, res) {
      res.send("ini page home dari page profile");
    }
  
    all(req, res) {
        const listProfiles = profileModel. getAllProfile();
      res.json("listProfiles");
    }
    find(req,res) {
        const getFindProfile = profileModel.getFindProfile(req.params.number - 1);
        res.json(findProfile);
    }
  }
  
  module.exports = Object.freeze(new ProfileController());