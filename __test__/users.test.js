// * NOTE: AI generated
import app from "../index.js";
const request = require("supertest");

describe("GET /users", () => {
  it("responds with a json containing all users", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});

describe("POST /users", () => {
  it("responds with a json containing the created user", async () => {
    const newUser = { firstName: "John", lastName: "Doe", age: 30 };
    const response = await request(app).post("/users").send(newUser);
    expect(response.statusCode).toBe(200);
    expect(response.body.firstName).toEqual(newUser.firstName);
  });

  it("responds with a 400 status code if a required field is missing", async () => {
    const newUser = { firstName: "John", lastName: "Doe" }; // age is missing
    const response = await request(app).post("/users").send(newUser);
    expect(response.statusCode).toBe(400);
  });
});
