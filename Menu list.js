class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
// creates array for items
class Menu {
  constructor() {
    this.menuItems = [];
  }
// creates option to create an item
  createItem(name, price) {
    const newItem = new MenuItem(name, price);
    this.menuItems.push(newItem);
    console.log(`Item '${name}' added to the menu.`);
  }
// option to view items
  viewMenu() {
    console.log("Menu:");
    this.menuItems.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - $${item.price}`);
    });
  }
// option to delete an item
  deleteItem(index) {
    if (index >= 0 && index < this.menuItems.length) {
      const deletedItem = this.menuItems.splice(index, 1)[0];
      console.log(`Item '${deletedItem.name}' deleted from the menu.`);
    } else {
      console.log("Invalid index.");
    }
  }
}
// fucntion to display options to choose from
function main() {
  const menu = new Menu();

  while (true) {
    console.log("\nMenu App");
    console.log("1. Create item");
    console.log("2. View menu");
    console.log("3. Delete item");
    console.log("4. Exit");
// creates prompt for your choice and the option to enter item name, price or delete an item, then option to exit.
    const choice = prompt("Enter your choice:");

    switch (choice) {
      case "1":
        const name = prompt("Enter item name:");
        const price = parseFloat(prompt("Enter item price:"));
        menu.createItem(name, price);
        break;
      case "2":
        menu.viewMenu();
        break;
      case "3":
        const index = parseInt(prompt("Enter the index of the item to delete:"));
        menu.deleteItem(index - 1); // Adjust index to match array index
        break;
      case "4":
        console.log("Exiting...");
        return;
      default:
        console.log("Invalid choice. Please enter a number between 1 and 4.");
    }
  }
}

main();