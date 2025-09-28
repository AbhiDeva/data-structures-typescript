import { Stack as Stack_ } from "../../../core/stack.js";
class UndoRedo {
    undoStack = new Stack_();
    redoStack = new Stack_();
    currentState = '';
    constructor(initialState) {
        this.currentState = initialState;
    }
    // Make a new change
    makeChange(newState) {
        this.undoStack.push(this.currentState);
        this.currentState = newState;
        this.redoStack.clear(); // Clear redo stack on new change
        console.log(`📝 Made change: ${newState}`);
        this.printCurrentState();
    }
    undo() {
        if (this.undoStack.isEmpty()) {
            console.log('❌ Cannot undo - no previous states');
            return null;
        }
        this.redoStack.push(this.currentState);
        this.currentState = this.undoStack.pop();
        console.log(`↩️ Undid to: ${this.currentState}`);
        this.printCurrentState();
        return this.currentState;
    }
    redo() {
        if (this.redoStack.isEmpty()) {
            console.log('❌ Cannot redo - no next states');
            return null;
        }
        this.undoStack.push(this.currentState);
        this.currentState = this.redoStack.pop();
        console.log(`↪️ Redid to: ${this.currentState}`);
        this.printCurrentState();
        return this.currentState;
    }
    getCurrentState() {
        return this.currentState;
    }
    getUndoHistory() {
        return this.undoStack.toArray();
    }
    getRedoHistory() {
        return this.redoStack.toArray();
    }
    printCurrentState() {
        console.log(`   Current State: ${this.currentState}`);
        console.log(`   Undo Stack: [${this.undoStack.toArray().join(', ')}]`);
        console.log(`   Redo Stack: [${this.undoStack.toArray().join(', ')}]`);
    }
    getUndoSize() {
        return this.undoStack.size();
    }
    getRedoSize() {
        return this.redoStack.size();
    }
}
export { UndoRedo };
//# sourceMappingURL=undoRedo.js.map