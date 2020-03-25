const packs = require("./../../../main.js");

module.exports = (req, res) => {
  const json = req.body;
  switch (json.type) {
    case "create":
      if (json.target.username && json.target.email && json.target.password) {
      }
      break;
    case "delete":
      res.json({ status: 200, message: "Endpoint not yet active" });
      break;
    case "modify":
      res.json({ status: 200, message: "Endpoint not yet active" });
      break;
    case "info":
      if (json.target.username) {
        packs.db.models.Users.findOne({
          where: { username: json.target.username }
        }).then((values, err) => {
          if (err) throw err;
          if (values) {
            res.json({
              status: 200,
              values: values[0]
            });
          } else {
            res.status(404).json({ status: 404, message: "Cannot find user." });
          }
        });
      }
      break;
  }
};

// ! To be completed when
function integrationFilter(integration) {
  const newIntegration = {};
  return newIntegration;
}
