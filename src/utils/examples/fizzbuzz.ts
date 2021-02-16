const isFizz = (num: number) => num % 3 === 0;
const isBuzz = (num: number) => num % 5 === 0;

export const fizzbuzz = (num: number) => {
	if (isFizz(num) && isBuzz(num)) return "FIZZBUZZ";
	if (isFizz(num)) return "FIZZ";
	if (isBuzz(num)) return "BUZZ";

	return num.toString();
};
