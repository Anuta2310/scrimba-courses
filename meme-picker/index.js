import {catsData} from "/data.js"

const emotionRadios = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById("get-image-btn")
const gifsOnlyOption = document.getElementById("gifs-only-option")
const memeModal = document.getElementById("meme-modal")
const memeModalInner = document.getElementById("meme-modal-inner")
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn")

emotionRadios.addEventListener("change", highlightCheckedOption)
memeModalCloseBtn.addEventListener("click", closeModal) 
getImageBtn.addEventListener("click", renderCat)

function highlightCheckedOption(e){
  const radioArray = document.getElementsByClassName("radio")
  for (let radio of radioArray){
    radio.classList.remove("highlight")
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

function closeModal(){
  memeModal.style.display = "none"
}

function renderCat(){
  const catObject = getSingleCatObject()
  memeModalInner.innerHTML = 
    `<img class="cat-img" src="./images/${catObject.image}" alt="${catObject.alt}">`
  memeModal.style.display = "flex"
}

function getSingleCatObject(){
  const catsArray = getMatchingCatsArray()
  if (catsArray.length === 1){
    return catsArray[0]
  } else {
    return catsArray[Math.floor(Math.random()*catsArray.length)]
  }
}

function getMatchingCatsArray(){
  if (document.querySelector("input[type='radio']:checked")){
  const checkedRadio = document.querySelector("input[type='radio']:checked").value
  const isGif = gifsOnlyOption.checked
  const matchingCatsArray = catsData.filter(function(cat){
    if (isGif){return cat.emotionTags.includes(checkedRadio) && cat.isGif
    } else {return cat.emotionTags.includes(checkedRadio)}
  })
  return matchingCatsArray
  }
}

function getEmotionsArray(cats){
  const catsEmotions = []
  for (let cat of cats){
    for (let emotion of cat.emotionTags){
      if(!catsEmotions.includes(emotion)){catsEmotions.push(emotion)}
    }
  } return catsEmotions
}

function renderEmotionsRadios(cats){
  const emotions = getEmotionsArray(cats)
  let emotionRadio = ""
  for (let emotion of emotions){
    emotionRadio += `
      <div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input type="radio" id="${emotion}" name="cat-emotion" value="${emotion}">
      </div>`
  } emotionRadios.innerHTML = emotionRadio
}

renderEmotionsRadios(catsData)