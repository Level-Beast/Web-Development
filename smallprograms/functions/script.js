const player = {
    name: "Warrior",
    health: 100,
    gold: 50,
    level: 1,
    attack: 20
};
let damage=30;
function takeDamage(damage){
    player.health-=damage;
    if(player.health<0){
        player.health=0;
        console.log("if statement is running "+player.health);
        return;
    }
}
function heal(amount){
    player.health+=50;
    if(player.health>=100){
        player.health=100;
        console.log("if statement is running "+player.health);
        return;
    }
}
function earnGold( amount){
    player.gold=amount;
    return;
}
function buySword(){
    if(player.gold>=120){
        player.gold-=120;
        player.attack+=10;
        console.log("sword purchased");
        return;
    }
}
function battle(){
    player.damage-=40;
    player.gold+=200;
    player.health+=20;
    buySword();
}
earnGold(150)
takeDamage(damage);
heal(50);
buySword();
battle();
console.log(player);