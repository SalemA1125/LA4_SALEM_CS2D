// Initialize customer queue
let customerQueue = [];
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to add customer to queue
function addCustomer(name) {
  customerQueue.push(name);
  console.log(`Customer added: ${name} (Number: ${customerQueue.length})`);
}

// Function to service customer
function serviceCustomer(number) {
  if (number > 0 && number <= customerQueue.length) {
    let customerName = customerQueue.shift();
    console.log(`Servicing customer: ${customerName} (Number: ${number})`);
    console.log("Updated Queue:", customerQueue);
  } else {
    console.log("Invalid number. Please try again.");
  }
}

// Main program
function main() {
  // Add initial customers
  customers.forEach(customer => addCustomer(customer));

  while (true) {
    console.log("\nCustomer Service Options:");
    console.log("1. Service customer");
    console.log("2. Exit");

    let choice = prompt("Enter choice: ");

    if (choice == 1) {
      let number = parseInt(prompt("Enter customer number to service: "));
      serviceCustomer(number);
    } else if (choice == 2) {
      break;
    } else {
      alert("Invalid choice. Please try again.");
    }
  }
}

main();
