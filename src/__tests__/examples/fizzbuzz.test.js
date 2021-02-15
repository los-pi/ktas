import { fizzbuzz } from "./fizzbuzz";

describe("Kata fizzbuzz", () => {
	it("Should return a given number as a string", () => {
		expect(fizzbuzz(1)).toEqual("1");
		expect(fizzbuzz(18)).toEqual("18");
	});

	it("Should return FIZZ if number is divisible by 3", () => {
		expect(fizzbuzz(3)).toBe("FIZZ");
		expect(fizzbuzz(357)).toBe("FIZZ");
		expect(fizzbuzz(54)).toBe("FIZZ");
	});

	it("Should return BUZZ if number is divisible by 5", () => {
		expect(fizzbuzz(5)).toEqual("BUZZ");
		expect(fizzbuzz(155)).toEqual("BUZZ");
		expect(fizzbuzz(455)).toEqual("BUZZ");
		expect(fizzbuzz(5)).toEqual("BUZZ");
	});

	it("Should return FIZZBUZZ is given number is divisible by 3 and 5", () => {
		expect(fizzbuzz(15)).toEqual("FIZZBUZZ");
		expect(fizzbuzz(30)).toEqual("FIZZBUZZ");
	});
});
