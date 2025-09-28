import { Stack as Stack_ } from "../../../core/stack.js";
function isBalanced(expr) {
    const stack = new Stack_();
    const pairs = { ")": "(", "}": "{", "]": "[" };
    for (let char of expr) {
        if (["(", "{", "["].includes(char)) {
            stack.push(char);
        }
        else if ([")", "}", "]"].includes(char)) {
            if (stack.isEmpty() || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}
export { isBalanced };
//# sourceMappingURL=BalancedParenthese.js.map