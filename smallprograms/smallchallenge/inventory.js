const prompt = require('prompt-sync')();

// const backpack = {
//   ironHelm: 1,
//   woodenShield: 1,
//   healingHerb: 5
// };

// const equipment = {
//   head: null,      // Nothing equipped on head yet
//   leftHand: null,  // Nothing equipped in left hand yet
//   rightHand: "rustySword"
// };

// const itemTypes = {
//   ironHelm: "head",
//   woodenShield: "leftHand",
//   healingHerb: "consumable" // Consumables CANNOT be equipped!
// };

// function equipItem(itemName) {
//   // 🛡️ Guard 1: Check if item exists in backpack and quantity > 0
//   if (!backpack[itemName] || backpack[itemName] <= 0) {
//     return "Item not found in backpack!";
//   }

//   // 🛡️ Guard 2: Get target slot using ternary operator
//   let slot = itemTypes[itemName] ? itemTypes[itemName] : "none";

//   // Check if item can actually be equipped
//   if (slot === "consumable" || slot === "none") {
//     return "This item cannot be equipped!";
//   }

//   // ⚔️ Step 3: Equip the item and update backpack count
//   equipment[slot] = itemName;
//   backpack[itemName] = backpack[itemName] - 1;

//   return `Successfully equipped ${itemName}!`;
// }

// // --- TEST CALLS ---
// console.log(equipItem("ironHelm")); 
// // Output: "Successfully equipped ironHelm!"

// console.log(equipItem("healingHerb")); 
// // Output: "This item cannot be equipped!"

// console.log(equipItem("dragonArmor")); 
// // Output: "Item not found in backpack!"

// console.log("\n--- Updated Equipment ---");
// console.log(equipment);

// console.log("\n--- Updated Backpack ---");
// console.log(backpack);

