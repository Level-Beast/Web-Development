const prompt = require('prompt-sync')();

const backpack = {
  ironHelm: 1,
  woodenShield: 1,
  healingHerb: 5
};

const equipment = {
  head: null,      // Nothing equipped on head yet
  leftHand: null,  // Nothing equipped in left hand yet
  rightHand: "rustySword"
};

const itemTypes = {
  ironHelm: "head",
  woodenShield: "leftHand",
  healingHerb: "consumable" // Consumables CANNOT be equipped!
};
function validateItem(item){
    let itemName=itemTypes[item] ? itemTypes[item]:"this item doesn't exist";
    let canBeEquipped=itemTypes.healingHerb === itemName ? "this can't be equiped" : "this can be equiped";  
    return itemName;
}

function equipItem(itemName){
    let result=validateItem(itemName);
}
let itemName="healingHerb";
equipItem(itemName);