const { all } = require("../router/article");

class profileController {
    search(req, res) {
        res.send("ini home dari page article yang search")
    }
};

class profileController {
    all(req,res) {
    res.send("ini page dari page article yang all");
    }
}

class profileController {
    find(req,res) {
    res.send("ini page dari page article yang find");
    }
}

module.exports = Object.freeze (articleController());

/**class ArticleController {
 * home (req, res) {
 * console.log(req.params)
 * }
 * }
 * 
 */