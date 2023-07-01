import characterData from './data.js';
import Character from './Character.js';

let monstersArray = ['orc', 'demon', 'goblin'];
let isWaiting = false;

function getNewMonster(){
    const nextMonsterData = characterData[monstersArray.shift()];
    return nextMonsterData ? new Character(nextMonsterData) : {};
}

function attack(){
    if (!isWaiting){
        wizard.setDiceHtml();
        monster.setDiceHtml();
        wizard.takeDamage(monster.currentDiceScore);
        monster.takeDamage(wizard.currentDiceScore);
        render();
        if (wizard.isDead){
            endGame();
        } else if (monster.isDead){
            if (monstersArray.length > 0){
                isWaiting = true;
                setTimeout(() => {
                    monster = getNewMonster();
                    render();
                    isWaiting = false;
                }, 1500);
            } else {
                endGame();
            };
        };
    };
};

function endGame(){
    isWaiting = true;
    const endMessage = wizard.isDead && monster.isDead ? "No victors - all creatures are dead" 
        : wizard.isDead ? `The monsters are Victorious`
        : "The Wizard Wins";
    const endEmoji = monster.isDead ? "🔮" : "☠️";
    setTimeout(() => {
        document.body.innerHTML = `
            <div class="end-game">
                <h2>Game Over</h2>
                <h3>${endMessage}</h3>
                <p class="end-emoji">${endEmoji}</p>
            </div>`;
    }, 1500);
    
};

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = monster.getCharacterHtml();
};

document.getElementById('attack-button').addEventListener('click', attack);

const wizard = new Character(characterData.hero);
let monster = getNewMonster();
render();