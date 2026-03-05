//JavaScript Assignment (My Bank)

//Create a JavaScript-based system that manages customers and transactions. You are building a simplified version of Bank.

//Part 1 - Create a customers array:

let customers = [
  {
    id: 1,
    name: "John",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "Amy",
    balance: 5000,
    transactions: [],
  },
];

//Part 2 - Create the following functions:

// -Add amount to balance
// -Add transaction record

function withdraw(id, amount){
// -Check if sufficient balance
// -Deduct amount
// -Add transaction
customers = customers.map((customer) => {
    if (customer.id === id) {
      if (customer.balance < amount) {
        console.log("Insufficient balance");
        return customer;
      }
      return {
        ...customer,
        balance: customer.balance - amount,
        transactions: [
          ...customer.transactions,
          {
            type: "debit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}


// checkBalance(id)
// -Return current balance

function showTransactions(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer.transactions);
}

//Part 3 - Each transaction must look like:
// {
//   type: "credit" or "debit",
//   amount: 1000,
//   date: currentDate
// }

// //Submission Requirements:
// -Single JS file
// -Well-structured code
// -Proper function separation
// let customers = [
//   {
//     id: 1,
//     name: "John",
//     balance: 5000,
//     transactions: [],
//   },
//   {
//     id: 2,
//     name: "Amy",
//     balance: 5000,
//     transactions: [],
//   },
// ];

function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer);
}

function deposit(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance: customer.balance + amount,
        transactions: [
          ...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}
deposit(1, 1500);
checkBalance(1)
deposit(1, 1000);
checkBalance(1);
showTransactions(1);
withdraw(1, 10000);