const request = require("supertest");
const app = require("../../app");
const { mongoConnect } = require("../../services/mongo");

describe("Launches API", () => {
  beforeAll(async () => {
    await mongoConnect();
  });

  const completeLaunchDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
    launchDate: "February 27, 2024",
  };

  const launchDataWithoutDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
  };

  const launchDataWithInvalidDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
    launchDate: "fakeDate",
  };

  describe("Test GET /launches", () => {
    test("It should respond with 200 success", async () => {
      const response = await request(app)
        .get("/launches")
        .expect("Content-Type", /json/)
        .expect(200);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("Test POST /launch", () => {
    test("It should respond with 201 created", async () => {
      const response = await request(app)
        .post("/launches")
        .send(completeLaunchDate)
        .expect("Content-Type", /json/)
        .expect(201);

      const requestDate = new Date(completeLaunchDate.launchDate).valueOf();
      const responseDate = new Date(response.body.launchDate).valueOf();
      expect(responseDate).toBe(requestDate);

      expect(response.body).toMatchObject(launchDataWithoutDate);
    });

    // Moved this test case outside of the previous test case
    test("It should catch missing required properties", async () => {
      const response = await request(app)
        .post("/launches")
        .send(launchDataWithoutDate)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        error: "Missing required launch property",
      });
    });

    // You can add more test cases here as needed
    test("It should catch invalid dates", async () => {
      const response = await request(app)
        .post("/launches")
        .send(launchDataWithInvalidDate)
        .expect("Content-Type", /json/)
        .expect(400);
    });
  });
});
