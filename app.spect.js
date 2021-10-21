console.log(sayHi("Kunder"));

const result = sayHi("lunder");
const spected = "Hello Kunder!";

it("The function says hi", () => {
  expect(sayHi("Kunder")).toBe("Hello Kunder!");
});
