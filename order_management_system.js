// Task 1: Create an Inventory Array of Product Objects

const inventory = [
{ name: 'Frappe', price: 5, quantity: 10 },
{ name: 'Latte', price: 3, quantity: 5 },
{ name: 'Americano', price: 4, quantity: 4 },
{ name: 'Iced Coffee', price: 4, quantity: 8 }
];

// Results:
console.log(inventory);

// Task 2: Create an Orders Array of Order Objects

const orders = [];

// Display empty orders array
console.log(orders);

// Task 3: Create a Function to Place an Order

function placeOrder(customerName, items) {
    // Check if all items have enough stock
    for (const item of items) {
      const product = inventory.find(p => p.name === item.name);
      if (!product || product.quantity < item.quantity) {
        console.log(`Not enough stock for ${item.name}`);
        return; // Stop the function if stock is insufficient
      }
    }
  
    // Update inventory and add the order
    items.forEach(item => {
      const product = inventory.find(p => p.name === item.name);
      product.quantity -= item.quantity;
    });
  
    // Add the new order to the orders array
    orders.push({
      customerName,
      items,
      status: 'Pending'
    });
  
    console.log('Order placed successfully for', customerName);
  }
  
  // Example usage:
  placeOrder('Joe Exotic', [{ name: 'Frappe', quantity: 2 }, { name: 'Latte', quantity: 1 }]);
  placeOrder('Carol Baskin', [{ name: 'Americano', quantity: 25 }]); // Not enough stock
  
  // Results:
  console.log('Updated Inventory:', inventory);
  console.log('Orders:', orders);

  // Task 4: Create a Function to Calculate Total for an Order

  function calculateOrderTotal(order) {
    let total = 0;
  
    // Calculate total price by multiplying quantity by price
    order.items.forEach(item => {
      const product = inventory.find(p => p.name === item.name);
      if (product) {
        total += product.price * item.quantity;
      }
    });
  
    return total; // Return the total price
  }
  
  // Example usage of calculateOrderTotal function
  console.log(`Total for ${orders[0].customerName}'s order: $${calculateOrderTotal(orders[0]).toFixed(2)}`);

  // Task 5: Create a Function to Mark an Order as Completed

  function completeOrder(customerName) {
    // Find the order for the given customer name
  const order = orders.find(o => o.customerName === customerName);
  
  if (order) {
    order.status = 'Completed'; // Update the order status
    console.log(`Order for ${customerName} marked as completed.`);
  } else {
    console.log(`Order not found for ${customerName}.`); // Log error if not found
  }
}

// Example usage:
completeOrder('Joe Exotic'); // This will mark Joe's order as completed
completeOrder('Unknown Customer'); // This will log an error message