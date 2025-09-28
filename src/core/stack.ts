class Stack<T>{
    private items: T[] = [];
    
    // Add elements to top of stack
    push(element: T): void {
        this.items.push(element);
    }

    // Remove element from top of stack
    pop(): T | undefined {
        return this.items.pop();
    }

    // View the top element of stack without removing it
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // check if stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Get the number of elements in stack
    size(): number {
        return this.items.length;
    }

    // Remove all elements from stack
    clear(): void {
        this.items = [];
    }
    // Print the stack elements
    print(): void {
        console.log(this.items.toString());
    }
    // Convert stack to array
    toArray(): T[] {
        return [...this.items];
    }
}

export { Stack };
