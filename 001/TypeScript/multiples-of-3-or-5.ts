import { createInterface } from 'node:readline/promises';

async function askNumber() {
	const readline = createInterface({
		input: process.stdin,
		output: process.stdout
	});
	const input:string = await readline.question("Input number: ");
	readline.close();
	return (input);
}

function sum_multiples_3_or_5(n:number) {
	let sum:number = 0;
	for (let i = 1; i < n; i++) {
		if (i % 3 == 0 || i % 5 == 0)
			sum += i;
	}
	return (sum);
}

async function main() {
	let n:number = parseInt(await askNumber());
	let result:number = sum_multiples_3_or_5(n);
	console.log(result);
}

main();
