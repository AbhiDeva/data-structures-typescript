import { Stack } from "./../../../core/stack.js";
import type { HistoryEntry } from "./../../../model/HistoryEntry.js";


class BrowserHistory {
    private backStack: Stack<HistoryEntry>;
    private forwardStack: Stack<HistoryEntry>;
    private currentPage: HistoryEntry | null;
    private maxHistorySize: number; constructor(maxSize: number = 50) {
        this.backStack = new Stack<HistoryEntry>();
        this.forwardStack = new Stack<HistoryEntry>();
        this.currentPage = null;
        this.maxHistorySize = maxSize;
    }
    // Navigate to a new page 
    visit(url: string, title: string, scrollPosition: number = 0): void {
        // If we have a current page, push it to back stack 
        if (this.currentPage) {
            this.backStack.push(this.currentPage);
            // Maintain max history size
            if (this.backStack.size() > this.maxHistorySize) {
                // Remove oldest entry (simulate by creating new stack)
                const tempStack = new Stack<HistoryEntry>();
                while (this.backStack.size() > 1) {
                    tempStack.push(this.backStack.pop()!);
                }
                this.backStack.clear();
                while (!tempStack.isEmpty()) {
                    this.backStack.push(tempStack.pop()!);
                }
            }
        } // Set new current page

        this.currentPage = { url, title, timestamp: new Date(), scrollPosition };
        // Clear forward stack (new navigation invalidates forward history) 
        this.forwardStack.clear(); console.log(`🌐 Navigated to: ${title} (${url})`);
        this.printCurrentState();
    } 
    
    // Go back to previous page 
    goBack(): HistoryEntry | null {
        if (this.backStack.isEmpty()) { console.log('❌ Cannot go back - no previous pages'); return null; }
        // Push current page to forward stack 
        if (this.currentPage) { this.forwardStack.push(this.currentPage); }
        // Pop from back stack to current 
        this.currentPage = this.backStack.pop()!; console.log(`⬅️ Went back to: ${this.currentPage.title}`);
        this.printCurrentState(); return this.currentPage;
    } 
    
    // Go forward to next page 
    goForward(): HistoryEntry | null {
        if (this.forwardStack.isEmpty()) { console.log('❌ Cannot go forward - no next pages'); return null; }
        // Push current page to back stack
        if (this.currentPage) { this.backStack.push(this.currentPage); }
        // Pop from forward stack to current 
        this.currentPage = this.forwardStack.pop()!; console.log(`➡️ Went forward to: ${this.currentPage.title}`);
        this.printCurrentState(); return this.currentPage;
    }
    // Check if back navigation is possible 
    canGoBack(): boolean { return !this.backStack.isEmpty(); }
    // Check if forward navigation is possible 
    canGoForward(): boolean { return !this.forwardStack.isEmpty(); } 
    
    // Get current page
    getCurrentPage(): HistoryEntry | null { return this.currentPage; }
    
    // Get history summary 
    getHistorySummary(): object {
        return {
            current: this.currentPage?.title || 'None',
            backCount: this.backStack.size(), forwardCount: this.forwardStack.size(), canGoBack: this.canGoBack(),
            canGoForward: this.canGoForward()
        };
    } 
    
    // Print current state for debugging 
    private printCurrentState(): void { console.log('📊 History State:', this.getHistorySummary()); }
}


export { BrowserHistory };
