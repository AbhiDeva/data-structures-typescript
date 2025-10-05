import { Stack as Stack_ } from "../../../core/stack.js";

class PhoneValidator {
  private errors = new Stack_<string>();
  private allowedChars = new Set("0123456789()-,");

  validate(phone: string): string[] {
    this.errors.clear();

    // 1. Check required
    if (!phone || phone.trim() === "") {
      this.errors.push("Phone Number is required");
    }

    // 2. Check max length
    if (phone.length > 40) {
      this.errors.push("Maximum character length is 40 digits");
    }

    // 3. Check allowed characters
    for (let ch of phone) {
      if (!this.allowedChars.has(ch)) {
        this.errors.push(`Invalid character: ${ch}`);
        break; // push only once for first invalid character
      }
    }

    // 4. Check minimum digits (ignore non-digit chars)
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      this.errors.push("Minimum Phone Number is 10 digits");
    }

    // Return errors as array
    return this.errors.toArray();
  }

  printErrors(): void {
    if (this.errors.isEmpty()) {
      console.log("✅ Phone number is valid");
    } else {
      console.log("❌ Phone number validation errors:");
      this.errors.toArray().forEach((err, i) => console.log(`${i + 1}. ${err}`));
    }
  }
}

export { PhoneValidator };
