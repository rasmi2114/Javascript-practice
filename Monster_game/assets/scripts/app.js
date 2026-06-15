const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
    currentMonsterHealth =chosenMaxLife;
    currentPlayerHealth =chosenMaxLife;
    resetGame ();
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
    } else if(currentPlayerHealth <=0 && currentMonsterHealth > 0){
        alert('you lost!');
    } else if (currentPlayerHealth <=0 && currentMonsterHealth <=0 ){
        alert ('You Have a draw!');
    }
    if (
        currentMonsterHealth <= 0 && currentPlayerHealth > 0 ||
        currentPlayerHealth <=0 && currentMonsterHealth > 0 ||
        currentPlayerHealth <=0 && currentMonsterHealth <=0
    ){
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK'){
        maxDamage = ATTACK_VALUE;
    } else{
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler(){
    attackMonster('STRONG_ATTACK');
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