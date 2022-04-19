export const calculateSuperFatorialWithMemoization = () => {
  const cache: {
    [key: number]: number
  } = {};

  return (superFatorial: number) => {
    const calculateFatorialRecursively = (fatorial: number): number => {
      if (fatorial === 0) return 1;
      if (cache[fatorial]) return cache[fatorial];

      const result = fatorial * calculateFatorialRecursively(fatorial - 1);

      cache[fatorial] = result;

      return result;
    }

    let result = 1;

    for (let current = 1; current <= superFatorial; current++) {
      result *= calculateFatorialRecursively(current);
    }

    return result;
  }
};