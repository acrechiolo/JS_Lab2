//Random Damage
const randomDamage = _ => Math.floor(Math.random() * 10) + 1;

//Choose Option
const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return randNum === 0 ? opt1 : opt2;
};

// Attack Player
const attackPlayer = function (health) {
    return health - randomDamage();
};
// Log Health 
const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}
// Log Death
const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}
// Is Dead? 
const isDead = (health) => {
    return health <= 0 ? true : false;
};

//FIGHT!!
function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            isDead(player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            isDead(player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1)
                break;
            }
        }
    }
}

//CALL FUNCTION
fight("Hiero", "Mayor", 100, 100);