const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK ='ATTACK'; // MODE_ATTACK =0
const MODE_STRONG_ATTACK ='STRONG_ATTACK'; //MODE_STRONG_ATTACK =1
const LOG_EVENT_PLAYER_ATTACK ='PLAYER_ATTCK';
const LOG_EVENT_PLAYER_STRONG_ATTACK ='PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACJ ='MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL ='PLAYER_HEAL';
const LOG_EVENT_GAME_OVER ='GAME_OVER'; 

const enteredValue = prompt('Maximum life for you and the monster', '100');

let chosenMaxLife = parseInt(enteredValue);
let battleLOg =100;

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function WriteToLOg(ev, val, monsterHealth, playerHealth) {
    let logEntry;
    if (event ===LOG_EVENT_PLAYER_ATTACK) {
        logEntry ={
            event: ev,
            value: val,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
        battleLOg.push(logEntry);
    }
}


function reset() {
    currentMonsterHealth =chosenMaxLife;
    currentPlayerHealth =chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerdamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerdamage;

    if (currentPlayerHealth <=0 && hasBonusLife) {
        hasBonusLife =false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerhealth(initialPlayerHealth);
        alert('you would be dead but the bonus life saved you!');
    }
    
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('you won!');
    } else if(currentPlayerHealth <=0 && currentMonsterHealth > 0) {
        alert('you lost!');
    } else if (currentPlayerHealth <=0 && currentMonsterHealth <=0 ) {
        alert ('You Have a draw!');
    }
    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0 ) {
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === MODE_ATTACK){
        maxDamage = ATTACK_VALUE;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler(){
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healvalue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
       alert ("You can't heal to more than your max initial health.");
       healvalue = chosenMaxLife - currentPlayerHealth;
    } else {
        healvalue = HEAL_VALUE;
    }
    increasePlayerHealth(healvalue);
    currentPlayerHealth += healvalue;
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);