import characterData from './data.js';
import Character from './Character.js';

function attack(){
    wizard.getDiceHtml();
    orc.getDiceHtml();
    wizard.takeDamage(orc.currentDiceScore);
    orc.takeDamage(wizard.currentDiceScore);
    render();
    if (wizard.isDead || orc.isDead) {endGame()};
};

function endGame(){
    const endMessage = wizard.isDead && orc.isDead ? "No victors - all creatures are dead" 
        : wizard.isDead ? "The Orc is Victorious" 
        : "The Wizard Wins";
    const endEmoji = orc.isDead ? "🔮" : "☠️";
    document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>`;
};

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
};

document.getElementById('attack-button').addEventListener('click', attack);

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();