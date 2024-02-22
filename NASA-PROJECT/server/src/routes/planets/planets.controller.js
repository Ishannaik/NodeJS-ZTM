const { planets } = require("../../models/planets.model");

function getAllPlanets(req, res) {
  return res.json(planets);
}

module.exports = {
  getAllPlanets,
};
