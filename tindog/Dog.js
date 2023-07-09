class Dog {
    constructor(data) {
        Object.assign(this, data);
    }

    getDogHtml() {
        const { name, age, profileimg, phrase } = this;
        return `
            <img class="profile__img" src="${profileimg}">
            <div class="profile__info">
                <p class="profile__name">${name}, ${age}</p>
                <p class="profile__phrase">${phrase}</p>
            </div>
        `
    }

    getReactionHtml() {
        return this.hasBeenLiked ? `<img src="./images/badge-like.png"></img>` : `<img src="./images/badge-nope.png">`
    }
}

export default Dog;