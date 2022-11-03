const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const lettersNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const lettersSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pswdOneEl = document.getElementById("pswd-one")
const pswdTwoEl = document.getElementById("pswd-two")
const generateBtn = document.getElementById("generate-btn")
const lengthInput = document.getElementById("length-input")

let toggleNumber = document.getElementById("toggle-number")
let toggleSymbol = document.getElementById("toggle-symbol")

let pswdLength = lengthInput.valueAsNumber
lengthInput.addEventListener("input", function(){
  pswdLength = lengthInput.valueAsNumber
  return pswdLength
})

 let toggleNum = true
 let toggleSym = true
toggleNumber.addEventListener("change", function(){
  if (this.checked) {
    return toggleNum = true
  } else {
    return toggleNum = false
}})

toggleSymbol.addEventListener("change", function(){
  if (this.checked) {
    return toggleSym = true
  } else {
    return toggleSym = false
}})

generateBtn.addEventListener("click", function()
{ let pswdOne = getRandomPswd()
  let pswdTwo = getRandomPswd()
  pswdOneEl.textContent = pswdOne
  pswdTwoEl.textContent = pswdTwo
})

function getRandomPswd(){
  let pswd = ""
  if (toggleNum === false && toggleSym === false) {
    for (let i = 0; i < pswdLength; i++) {
      pswd += getRandomLetter()
    } return pswd
  }  
  else if (toggleNum === true && toggleSym === false) {
    for (let i = 0; i < pswdLength; i++) {
      pswd += getRandomLetterNumber()
    } return pswd
  }
  else if (toggleNum === false && toggleSym === true) {
    for (let i = 0; i < pswdLength; i++) {
      pswd += getRandomLetterSymbol()
    }       return pswd
  }
  else {
    for (let i = 0; i < pswdLength; i++) {
      pswd += getRandomChar()
    }      return pswd
  }
}

function getRandomChar() {
    let randomChar = Math.floor (Math.random() * characters.length) 
    return (characters[randomChar])
}
function getRandomLetter(){
  let randomLetter = Math.floor (Math.random() * letters.length)
  return (letters[randomLetter])
}
function getRandomLetterNumber(){
  let randomLetterNumber = Math.floor (Math.random() * lettersNumbers.length)
  return (lettersNumbers[randomLetterNumber])
}
function getRandomLetterSymbol(){
  let randomSymbol = Math.floor (Math.random() * lettersSymbols.length)
  return (lettersSymbols[randomSymbol])
}




pswdOneEl.onclick = function() {
  document.execCommand("copy")
  alert("Password copied to clipboard")
}
pswdOneEl.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pswdOneEl.textContent);
    // console.log(event.clipboardData.getData("text"))
  }
})

pswdTwoEl.onclick = function() {
  document.execCommand("copy")
  alert("Password copied to clipboard")
}
pswdTwoEl.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pswdTwoEl.textContent);
    // console.log(event.clipboardData.getData("text"))
  }
})


