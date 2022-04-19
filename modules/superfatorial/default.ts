const calculateFatorial = (fatorial: number): number => {
  let result = 1;

  if (fatorial === 0) return 1;

  for (let current = 1; current <= fatorial; current++) {
    result *= current;
  }

  return result;
};

export const calculateSuperFatorial = (superFatorial: number): number => {
  let result = 1;

  for (let current = 1; current <= superFatorial; current++) {
    result *= calculateFatorial(current);
  }

  return result;
};
