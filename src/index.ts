import { BrowserHistory } from './examples/stacks/example-1/browsernavigation.js';
import { UndoRedo } from './examples/stacks/example-2/undoRedo.js';

// Demo Usage
function demonstrateBrowserHistory(): void {
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


// stack example 4
import { PostfixEvaluator } from './examples/stacks/example-4/PostfixValidator.js';

const evaluator = new PostfixEvaluator();
const postfixExpressions = [
    "23 34 + 45 *", // (23 + 34) * 45
    "5 1 2 + 4 * + 3 -", // 5 + ((1 + 2) * 4) - 3
    "10 2 8 * + 3 -", // 10 + (2 * 8) - 3
    "2 3 + 5 /", // (2 + 3) / 5
    "7 8 + 3 2 + /" // (7 + 8) / (3 + 2)
];

postfixExpressions.forEach(expr => {
    try {
        const result = evaluator.evaluate(expr);
        console.log(`Postfix Expression: "${expr}" = ${result}`);
    } catch (error) {
        console.error(`Error evaluating expression "${expr}":`, error);
    }
});

// stack example 4 - next greater element
import { NextGreater } from './examples/stacks/example-4/NextGreater.js';

const nextGreater = new NextGreater();
const arraysToTest = [
    [4, 5, 2, 25],
    [13, 7, 6, 12],
    [1, 3, 2, 4],
    [6, 8, 0, 1, 3]
];

arraysToTest.forEach(arr => {
    const result = nextGreater.evaluate(arr);
    console.log(`Next Greater Elements for [${arr}] are [${result}]`);
});

// Note: You can run this code in a TypeScript environment to see the stack implementations in action.


import { PhoneValidator } from "./examples/stacks/example-4/PhoneNumberValidation.js";

const validator = new PhoneValidator();

// Test cases
const numbers = [
  "",                    // empty
  "12345",               // too short
  "1234567890",          // valid
  "123-456-7890",        // valid with dashes
  "12345678901234567890123456789012345678901", // too long
  "12345@67890"          // invalid char
];

numbers.forEach((num) => {
  console.log(`\nValidating: "${num}"`);
  const errors = validator.validate(num);
  validator.printErrors();
});