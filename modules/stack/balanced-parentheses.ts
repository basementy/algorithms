const checkForBalancedParentheses = (string: string): boolean => {
  const stack: string[] = [];
  const map: {
    [key: string]: string
  } = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let current = 0; current < string.length; current++) {
    const char = string[current];

    if (char in map) {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;

      const last = stack.pop();

      if (last && map[last] !== char) return false;
    }
  }

  return stack.length === 0;
}

const BALANCED = "()[]{}";
const UNBALANCED = "([)]";

const resultWithBalancedParentheses = checkForBalancedParentheses(BALANCED);
const resultWithUnbalancedParentheses = checkForBalancedParentheses(UNBALANCED);

console.log(`Balanced parentheses (${BALANCED}): ${resultWithBalancedParentheses}`);
console.log(`Unbalanced parentheses (${UNBALANCED}): ${resultWithUnbalancedParentheses}`);