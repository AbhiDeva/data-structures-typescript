import { BrowserHistory } from './stacks/browsernavigation.js';
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
//# sourceMappingURL=index.js.map