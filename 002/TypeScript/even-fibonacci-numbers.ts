import { argv } from 'node:process';

function sum_even_fib(n:number) {
	let sum:number = 0;
	let curr:number = 1;
	let prev:number = 0;

	while (curr < n) {
		curr += prev;
		prev = (curr - prev);
		if (curr % 2 == 0)
			sum += curr;
	}
	return (sum);
}

function main()
{
	let n:number = 0;
	if (argv.length > 2)
		n = parseInt(argv[2]);
	if (n === 0)
		n = 4_000_000;
	let result:number = sum_even_fib(n);
	console.log(result);
}

if (require.main === module)
	main();
