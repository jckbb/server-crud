import request from "supertest";
import { app } from "../index.js";

describe("API Endpoints", () => {
  it("should create a new user", async () => {
    const res = await request(app).post("/users").send({
      first_name: "danny",
      last_name: "johnson",
      email: "dannyjohnson@gmail.com",
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body.first_name).toEqual("danny");
  });
});
