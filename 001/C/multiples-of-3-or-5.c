#include <stdlib.h>
#include <stdio.h>

unsigned int sum_multiples_3_or_5(unsigned int n)
{
	unsigned int sum;

	sum = 0;
	for (int i = 1; i < n; i++)
	{
		if (i % 3 == 0 || i % 5 == 0)
			sum += i;
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
		n = 1000;
	result = sum_multiples_3_or_5(n);
	printf("%u\n", result);
	return (0);
}
