class Stack {
    items = [];
    // Add elements to top of stack
    push(element) {
        this.items.push(element);
    }
    // Remove element from top of stack
    pop() {
        return this.items.pop();
    }
    // View the top element of stack without removing it
    peek() {
        return this.items[this.items.length - 1];
    }
    // check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
    // Get the number of elements in stack
    size() {
        return this.items.length;
    }
    // Remove all elements from stack
    clear() {
        this.items = [];
    }
    // Print the stack elements
    print() {
        console.log(this.items.toString());
    }
    // Convert stack to array
    toArray() {
        return [...this.items];
    }
}
export { Stack };
//# sourceMappingURL=stack.js.map