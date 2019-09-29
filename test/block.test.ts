import request from "supertest";
import app from "../src/config/app";

const chai = require("chai");
const expect = chai.expect;

describe("GET /api/v1/block", () => {
  it("should return 200 OK", (done) => {
    request(app).get("/api/v1/block/1")
      .expect(200, done);
  });
});


describe("POST /api/v1/block", () => {
  it("should return false from assert when no message is found", (done) => {
    request(app).post("/block")
      .field("page", 0)
      .field("page_size", 10)
      .end(function(err, res) {
        expect(res.error).to.be.false;
        done();
      })
      .expect(302);

  });
});