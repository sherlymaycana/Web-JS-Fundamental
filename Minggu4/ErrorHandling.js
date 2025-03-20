class BankAccount {
  #balance = 0;

  deposit(amount) {
    try {
      if (amount <= 0) {
        throw new Error("Deposit amount must be positive.");
      }
      this.#balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
}

const account = new BankAccount();
// account.deposit(-50); // Throws an error
account.deposit(100);
