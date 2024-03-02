const request = require("supertest");
const app = require("../../app");

describe("Test Get /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test Post /launches", () => {
  const completeLaunchData = {
    mission: "Gnaget är laget",
    rocket: "Årskortsraketen",
    target: "Råsunda",
    launchDate: "April 1, 2025",
  };

  const launchDataWithoutDate = {
    mission: "Gnaget är laget",
    rocket: "Årskortsraketen",
    target: "Råsunda",
  };

  const invalidDateFormat = {
    mission: "Gnaget är laget",
    rocket: "Årskortsraketen",
    target: "Råsunda",
    launchDate: "AIK",
  };

  test("It should respond with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(requestDate).toBe(responseDate);

    expect(response.body).toMatchObject(launchDataWithoutDate);
  });

  test("it should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Missing required launch property",
    });
  });
  test("It should catch invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(invalidDateFormat)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Invalid launch date",
    });
  });
});
