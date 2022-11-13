import {catsData} from "/data.js"

const emotionRadios = document.getElementById("emotion-radios")

function getEmotionsArray(cats){
  const catsEmotions = []
  for (let cat of cats){
    for (let emotion of cat.emotionTags){
      catsEmotions.push(emotion)
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