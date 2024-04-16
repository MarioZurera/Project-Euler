import { argv } from 'node:process';

function sum_multiples_3_or_5(n:number) {
	let sum:number = 0;
	for (let i = 1; i < n; i++) {
		if (i % 3 == 0 || i % 5 == 0)
			sum += i;
	}
	return (sum);
}

function main() {
	let n:number = 0;
	if (argv.length > 2)
		n = parseInt(argv[2]);
	if (n === 0)
		n = 1_000;
	let result:number = sum_multiples_3_or_5(n);
	console.log(result);
}

if (require.main === module)
	main();
