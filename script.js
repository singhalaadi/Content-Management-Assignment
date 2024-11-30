// Select DOM elements
const itemNameInput = document.getElementById("item-name");
const itemQuantityInput = document.getElementById("item-quantity");
const addItemButton = document.getElementById("add-item");
const shoppingList = document.getElementById("shopping-list");

// Function to add a new item
function addItem() {
    const itemName = itemNameInput.value.trim();
    const itemQuantity = itemQuantityInput.value.trim();

    // Validate inputs
    if (!itemName || !itemQuantity) {
        alert("Please enter both item name and quantity.");
        return;
    }

    // Create list item
    const listItem = document.createElement("li");
    listItem.className = "shopping-list-item";

    // Create span for item details
    const itemDetails = document.createElement("span");
    itemDetails.textContent = `${itemName} (x${itemQuantity})`;

    // Create Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editItem(listItem, itemDetails));

    // Create Remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeItem(listItem));

    // Append elements to list item
    listItem.appendChild(itemDetails);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

    // Append list item to the shopping list
    shoppingList.appendChild(listItem);

    // Clear input fields
    itemNameInput.value = "";
    itemQuantityInput.value = "";
}

// Function to edit an item
function editItem(listItem, itemDetails) {
    const newItemName = prompt("Enter new item name:", itemDetails.textContent.split(" (")[0]);
    const newItemQuantity = prompt("Enter new quantity:", itemDetails.textContent.split("x")[1].replace(")", ""));

    if (newItemName && newItemQuantity) {
        itemDetails.textContent = `${newItemName} (x${newItemQuantity})`;
    }
}

// Function to remove an item
function removeItem(listItem) {
    shoppingList.removeChild(listItem);
}

// Add event listener to the Add Item button
addItemButton.addEventListener("click", addItem);
