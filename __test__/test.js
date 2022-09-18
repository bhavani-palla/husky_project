const request = require("supertest");

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe("When testing jest", () => {
  describe("given i have a non failing test", () => {
    it("should be one", () => {
      expect(1).toBe(1);
    });
  });

  describe("given i have a non failing test", () => {
    it("should be two", () => {
      expect(2).toBe(2);
    });
  });
});

describe("When testing jest", () => {
  describe("given i have a non failing test", () => {
    it.skip("should fail", () => {
      expect(1).toBe(2);
    });
  });
});
