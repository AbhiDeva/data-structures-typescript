import { Stack as Stack_ } from "../../../core/stack.js";

function isBalanced(expr: string): boolean  {
  const stack = new Stack_<string>();
  const pairs: Record<string, string> = { ")": "(", "}": "{", "]": "[" };

  for (let char of expr) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else if ([")", "}", "]"].includes(char)) {
      if (stack.isEmpty() || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

export { isBalanced };