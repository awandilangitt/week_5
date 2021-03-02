class Selesai {
    get(req, res) {
     // const data = await db.users.findAll({ attributes: ["id", "full_name"] });
     res.send("ini nyoba bikin slash baru");
 }
}

module.exports = Object.freeze(new Selesai());
