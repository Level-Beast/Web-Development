const prompt = require('prompt-sync')();

// const hero = {
//   classType: "Warrior",
//   level: 5,
//   weapon: "Iron Sword"
// };

// let userChoice = "weapon";
// console.log(hero.level);
// console.log(hero[userChoice]);

// const playerStats = {
//   health: 100,
//   score: 0
// };

// let rewardType = "score";
// playerStats.health+=20;
// playerStats[rewardType]+=100;

// console.log(playerStats);


// let stuff=Object.keys(playerStats);
// console.log(stuff);


// Prices of items in gold
const itemPrices = {
  ruby: 100,
  potion: 25,
  scroll: 15,
  junk: 0
};

// What the player found in the chest
const chestLoot = {
  ruby: 2,
  potion: 4,
  scroll: 1
};
let total=0;
function calculateChestValue(chest,total){
    let loot=Object.keys(chest);
    for(let item of loot){
        let finalvalue=itemPrices[item]*chest[item];
        total=total+finalvalue;
    }
    console.log(total);
}
calculateChestValue(chestLoot,total);