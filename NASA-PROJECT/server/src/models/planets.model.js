const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");

const habitablePlanets = []; // Corrected variable name

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (chunk) => {
        if (isHabitablePlanet(chunk)) {
          habitablePlanets.push(chunk); // Corrected variable name
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(
          habitablePlanets.map((planet) => {
            return planet["kepler_name"];
          })
        );
        console.log(`${habitablePlanets.length} habitable planets found!`); // Corrected variable name
        resolve();
      });
  });
}

function getAllPlanets() {
  return habitablePlanets; // Corrected variable name
}

module.exports = {
  getAllPlanets, // Corrected variable name
  loadPlanetsData,
};
