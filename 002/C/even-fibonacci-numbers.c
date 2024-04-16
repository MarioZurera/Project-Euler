#include <stdlib.h>
#include <stdio.h>

unsigned int	sum_even_fib(unsigned int n)
{
	unsigned int	sum = 0;
	unsigned int	curr_number = 1;
	unsigned int	prev_number = 0;

	while (curr_number < n)
	{
		curr_number += prev_number;
		prev_number = (curr_number - prev_number);
		if (curr_number % 2 == 0)
			sum += curr_number;
	}
	return (sum);
}

int	main(int argc, char **argv)
{
	unsigned int	n = 0;
	unsigned int	result = 0;

	if (argc > 1)
		n = atoi(argv[1]);
	if (n == 0)
		n = 4000000;
	result = sum_even_fib(n);
	printf("%u\n", result);
	return (0);
}
