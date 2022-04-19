import now from 'performance-now'

import { calculateSuperFatorial } from './default';
import { calculateSuperFatorialWithMemoization } from './dynamic';

// Calculate the super factorial with the default implementation
const defaultStartTime = now();

const defaultResult = calculateSuperFatorial(5);

const defaultEndTime = now();

// Calculate the super factorial with the dynamic implementation

const memoizedSuperFatorial = calculateSuperFatorialWithMemoization();

const dynamicStartTime = now();

const memoizedResult = memoizedSuperFatorial(5);

const dynamicEndTime = now();

// Print the results
console.log(`--- Default implementation ---`);
console.log(`Time: ${(defaultEndTime - defaultStartTime).toFixed(4)}ms`);
console.log(`Result: ${defaultResult}`);
console.log('Time complexity: O(N^2)\n');

console.log(`--- Memoized implementation ---`);
console.log(`Time: ${(dynamicEndTime - dynamicStartTime).toFixed(4)}ms`);
console.log(`Result: ${memoizedResult}`);
console.log(`Time complexity: O(N)`);