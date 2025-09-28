import { Stack as Stack_ } from "../../../core/stack.js";
class NextGreater {
    stack = new Stack_();
    evaluate(arr) {
        const result = Array(arr.length).fill(-1);
        this.stack.clear();
        console.log(`Array: [${arr}]`);
        for (let i = 0; i < arr.length; i++) {
            console.log(`\nProcessing element: ${arr[i]}`);
            while (!this.stack.isEmpty()) {
                const peekIndex = this.stack.peek();
                if (peekIndex === undefined)
                    break; // safe check
                if (arr[i] > arr[peekIndex]) {
                    const index = this.stack.pop();
                    result[index] = arr[i];
                    console.log(` → arr[${index}] = ${arr[index]} → Next Greater = ${arr[i]} → Stack: [${this.stack.toArray()}]`);
                }
                else {
                    break; // current element not greater
                }
            }
            this.stack.push(i);
            console.log(`Push index ${i} → Stack: [${this.stack.toArray()}]`);
        }
        console.log(`\n✅ Final Next Greater Elements: [${result}]`);
        return result;
    }
}
export { NextGreater };
//# sourceMappingURL=NextGreater.js.map