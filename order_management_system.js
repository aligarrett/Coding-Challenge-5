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

// Results:
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
