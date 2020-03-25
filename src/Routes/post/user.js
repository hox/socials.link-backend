const packs = require("./../../../main.js");

module.exports = (req, res) => {
  const json = req.body;
  switch (json.type) {
    case "create":
      res.json({ status: 200, message: "Pong!" });
      break;
    case "delete":
      res.json({ status: 200, message: "Pong!" });
      break;
    case "modify":
      res.json({ status: 200, message: "Pong!" });
      break;
    case "info":
      if (json.target.username) {
        packs.db.models.User.findOne({
          where: { username: json.target.username }
        }).then((values, err) => {
          if (err) throw err;
          if (values) {
            res.json({
              status: 200,
              values: "CHANGE THIS TO VALUES ONCE PRIVATE VALUES ARE STRIPPED"
            }); // ! Finish this with var "values"
          } else {
            res.status(404).json({ status: 404, message: "Cannot find user." });
          }
        });
      }
      break;
  }
};
