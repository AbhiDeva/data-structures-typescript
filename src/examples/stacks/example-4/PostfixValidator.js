import { Stack as Stack_ } from "../../../core/stack.js";
class PostfixEvaluator {
    stack;
    constructor() {
        this.stack = new Stack_();
    }
    evaluate(expression) {
        this.stack.clear();
        console.log(`Evaluating Postfix: ${expression}`);
        for (let token of expression.split(" ")) {
            if (!isNaN(Number(token))) {
                this.stack.push(Number(token));
                console.log(`Token: ${token} → Push → Stack: [${this.stack.toArray()}]`);
            }
            else {
                const b = this.stack.pop();
                const a = this.stack.pop();
                if (a === undefined || b === undefined) {
                    throw new Error("Invalid postfix expression");
                }
                let result;
                switch (token) {
                    case "+":
                        result = a + b;
                        break;
                    case "-":
                        result = a - b;
                        break;
                    case "*":
                        result = a * b;
                        break;
                    case "/":
                        result = a / b;
                        break;
                    default: throw new Error("Invalid operator: " + token);
                }
                this.stack.push(result);
                console.log(`Token: ${token} → Apply ${a} ${token} ${b} = ${result} → Stack: [${this.stack.toArray()}]`);
            }
        }
        if (this.stack.size() !== 1) {
            throw new Error("Invalid postfix expression");
        }
        const finalResult = this.stack.pop();
        console.log(`✅ Final Result: ${finalResult}`);
        return finalResult;
    }
}
export { PostfixEvaluator };
//# sourceMappingURL=PostfixValidator.js.map