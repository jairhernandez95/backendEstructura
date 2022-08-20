import supertest from "supertest";
import api from "../api.js";
import * as database from "./database.js";

const agent = supertest.agent(api);

describe("Register User", () => {
  test("Create User", async () => {
    await database.connect();
    const response = await agent.post("/register").send({
      email: "test@gmail.com",
      password: "12345",
      name: "Test Name",
    });
    expect(response.statusCode).toEqual(200);
  });
});
