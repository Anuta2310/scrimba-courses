import {catsData} from "/data.js"

const emotionRadios = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById("get-image-btn")
const gifsOnlyOption = document.getElementById("gifs-only-option")

emotionRadios.addEventListener("change", highlightCheckedOption)
getImageBtn.addEventListener("click", getMatchingCatsArray)

function highlightCheckedOption(e){
  const radioArray = document.getElementsByClassName("radio")
  for (let radio of radioArray){
    radio.classList.remove("highlight")
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

function getMatchingCatsArray(){
  const isGif = gifsOnlyOption.checked
  console.log(isGif)
  if (document.querySelector("input[type='radio']:checked")){
  const checkedRadio = document.querySelector("input[type='radio']:checked").value
  console.log(checkedRadio)
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