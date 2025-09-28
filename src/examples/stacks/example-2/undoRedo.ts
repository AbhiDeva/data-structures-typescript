import type { Stack } from "../../../core/stack.js";
import { Stack as Stack_ } from "../../../core/stack.js";

class UndoRedo {
    private undoStack = new Stack_<string>();
    private redoStack = new Stack_<string>();
    private currentState: string = '';

    constructor(initialState: string) {
        this.currentState = initialState;
    }
    
    // Make a new change
    makeChange(newState: string): void {
        this.undoStack.push(this.currentState);
        this.currentState = newState;
        this.redoStack.clear(); // Clear redo stack on new change
        console.log(`📝 Made change: ${newState}`);
        this.printCurrentState();
    }

    undo(): string | null {
        if (this.undoStack.isEmpty()) {
            console.log('❌ Cannot undo - no previous states');
            return null;
        }
        this.redoStack.push(this.currentState);
        this.currentState = this.undoStack.pop()!;
        console.log(`↩️ Undid to: ${this.currentState}`);
        this.printCurrentState();
        return this.currentState;
    }

    redo(): string | null {
        if (this.redoStack.isEmpty()) {
            console.log('❌ Cannot redo - no next states');
            return null;
        }
        this.undoStack.push(this.currentState);
        this.currentState = this.redoStack.pop()!;
        console.log(`↪️ Redid to: ${this.currentState}`);
        this.printCurrentState();
        return this.currentState;
    }
    
    getCurrentState(): string {
        return this.currentState;
    }

    getUndoHistory(): string[] {
        return this.undoStack.toArray();
    }

    getRedoHistory(): string[] {
        return this.redoStack.toArray();
    }

    private printCurrentState(): void {
        console.log(`   Current State: ${this.currentState}`);
        console.log(`   Undo Stack: [${this.undoStack.toArray().join(', ')}]`);
        console.log(`   Redo Stack: [${this.undoStack.toArray().join(', ')}]`);
    }

    getUndoSize(): number{
        return this.undoStack.size()
    }

    getRedoSize(): number{
        return this.redoStack.size();
    }

}

export { UndoRedo };