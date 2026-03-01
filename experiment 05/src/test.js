import { getusername, sum } from "./math";


// -------- toBe() Example --------

test("should return correct username", () => {
  expect(getusername({ name: "sumanyu" })).toBe("sumanyu");
});


// Test sum function
test("should add two numbers correctly", () => {
  expect(sum(10, 20)).toBe(30);
});


// -------- toMatchSnapshot() Example --------


test("username snapshot test", () => {

  const user = getusername({ name: "sumanyu" });

  // Snapshot will store output
  expect(user).toMatchSnapshot();

});