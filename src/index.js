import { BrowserHistory } from './examples/stacks/example-1/browsernavigation.js';
import { UndoRedo } from './examples/stacks/example-2/undoRedo.js';
// Demo Usage
function demonstrateBrowserHistory() {
    console.log('🚀 Starting Browser History Demo\n');
    const browser = new BrowserHistory(); // Navigate through some pages 
    browser.visit('https://google.com', 'Google');
    browser.visit('https://github.com', 'GitHub');
    browser.visit('https://stackoverflow.com', 'Stack Overflow');
    browser.visit('https://developer.mozilla.org', 'MDN Web Docs');
    // Test back navigation
    browser.goBack(); // Stack Overflow
    browser.goBack(); // GitHub // Test forward navigation 
    browser.goForward(); // Stack Overflow // Navigate to new page (clears forward history)
    browser.visit('https://typescript.org', 'TypeScript');
    console.log('\n✅ Browser History Demo Complete!');
}
// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.
demonstrateBrowserHistory();
// ✅ Example
const editor = new UndoRedo(''); // Initial empty state
editor.makeChange("Hello");
editor.makeChange("Hello World");
editor.makeChange("Hello World!!!");
console.log("Current:", editor.getCurrentState()); // Hello World!!!
console.log("Undo stack:", editor.getUndoHistory());
console.log("Redo stack:", editor.getRedoHistory());
console.log("Undo size:", editor.getUndoSize());
console.log("Redo size:", editor.getRedoSize());
editor.undo();
console.log("After undo:", editor.getCurrentState());
console.log("Undo size:", editor.getUndoSize(), "Redo size:", editor.getRedoSize());
// stack example 3
import { isBalanced } from './examples/stacks/example-3/BalancedParenthese.js';
const expressions = [
    "{[()]}",
    "{[(])}",
    "{{[[(())]]}}",
    "((()))",
    "(()",
    "())",
    "[({})]",
    "[({)}]"
];
expressions.forEach(expr => {
    console.log(`Expression: ${expr} is ${isBalanced(expr) ? 'Balanced' : 'Not Balanced'}`);
});
//# sourceMappingURL=index.js.map