import { Stack } from "./../../../core/stack.js";
class BrowserHistory {
    backStack;
    forwardStack;
    currentPage;
    maxHistorySize;
    constructor(maxSize = 50) {
        this.backStack = new Stack();
        this.forwardStack = new Stack();
        this.currentPage = null;
        this.maxHistorySize = maxSize;
    }
    // Navigate to a new page 
    visit(url, title, scrollPosition = 0) {
        // If we have a current page, push it to back stack 
        if (this.currentPage) {
            this.backStack.push(this.currentPage);
            // Maintain max history size
            if (this.backStack.size() > this.maxHistorySize) {
                // Remove oldest entry (simulate by creating new stack)
                const tempStack = new Stack();
                while (this.backStack.size() > 1) {
                    tempStack.push(this.backStack.pop());
                }
                this.backStack.clear();
                while (!tempStack.isEmpty()) {
                    this.backStack.push(tempStack.pop());
                }
            }
        } // Set new current page
        this.currentPage = { url, title, timestamp: new Date(), scrollPosition };
        // Clear forward stack (new navigation invalidates forward history) 
        this.forwardStack.clear();
        console.log(`🌐 Navigated to: ${title} (${url})`);
        this.printCurrentState();
    }
    // Go back to previous page 
    goBack() {
        if (this.backStack.isEmpty()) {
            console.log('❌ Cannot go back - no previous pages');
            return null;
        }
        // Push current page to forward stack 
        if (this.currentPage) {
            this.forwardStack.push(this.currentPage);
        }
        // Pop from back stack to current 
        this.currentPage = this.backStack.pop();
        console.log(`⬅️ Went back to: ${this.currentPage.title}`);
        this.printCurrentState();
        return this.currentPage;
    }
    // Go forward to next page 
    goForward() {
        if (this.forwardStack.isEmpty()) {
            console.log('❌ Cannot go forward - no next pages');
            return null;
        }
        // Push current page to back stack
        if (this.currentPage) {
            this.backStack.push(this.currentPage);
        }
        // Pop from forward stack to current 
        this.currentPage = this.forwardStack.pop();
        console.log(`➡️ Went forward to: ${this.currentPage.title}`);
        this.printCurrentState();
        return this.currentPage;
    }
    // Check if back navigation is possible 
    canGoBack() { return !this.backStack.isEmpty(); }
    // Check if forward navigation is possible 
    canGoForward() { return !this.forwardStack.isEmpty(); }
    // Get current page
    getCurrentPage() { return this.currentPage; }
    // Get history summary 
    getHistorySummary() {
        return {
            current: this.currentPage?.title || 'None',
            backCount: this.backStack.size(), forwardCount: this.forwardStack.size(), canGoBack: this.canGoBack(),
            canGoForward: this.canGoForward()
        };
    }
    // Print current state for debugging 
    printCurrentState() { console.log('📊 History State:', this.getHistorySummary()); }
}
export { BrowserHistory };
//# sourceMappingURL=browsernavigation.js.map