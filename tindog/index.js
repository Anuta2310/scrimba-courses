import dogs from "./data.js";
import Dog from "./Dog.js";

const profileContainerEl = document.querySelector('.profile');
const reactionContainerEl = document.querySelector('.reaction');
const likeButtonEl = document.querySelector('.btn--like');
const nopeButtonEl = document.querySelector('.btn--nope');

let isWaiting = false;

function getNewDog() {
    const nextDog = dogs.shift();
    return nextDog ? new Dog(nextDog) : {};
}

function handleReaction(hasLiked) {
    if (!isWaiting){
        dog.hasBeenLiked = hasLiked;
    
        reactionContainerEl.innerHTML = dog.getReactionHtml();
    
        if (dogs.length > 0) {
            isWaiting = true;
            setTimeout(() => {
                dog = getNewDog();
                render();
                isWaiting = false;
            }, 1000);
        } else {
            renderEnd();
        }
    }
}
  
function renderEnd() {
    isWaiting = true;
    setTimeout(() => {
        reactionContainerEl.innerHTML = '';
        profileContainerEl.innerHTML = `
            <h1>That's it!</h1>
            <p>You've seen all the dogs!</p>`;
    }, 1000)
}

likeButtonEl.addEventListener('click', () => {
    handleReaction(true);
});

nopeButtonEl.addEventListener('click', () => {
    handleReaction(false);
});

function render() {
    profileContainerEl.innerHTML = dog.getDogHtml();
    reactionContainerEl.innerHTML = '';
}

let dog = getNewDog();
render();