const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const pswdOneEl = document.getElementById("pswd-one")
const pswdTwoEl = document.getElementById("pswd-two")
const generateBtn = document.getElementById("generate-btn")
const lengthInput = document.getElementById("length-input")

let pswdLength = lengthInput.valueAsNumber
lengthInput.addEventListener("input", function(){
  pswdLength = lengthInput.valueAsNumber
  return pswdLength
})

generateBtn.addEventListener("click", function()
{ let pswdOne = getRandomPswd()
  let pswdTwo = getRandomPswd()
  pswdOneEl.textContent = pswdOne
  pswdTwoEl.textContent = pswdTwo
})

function getRandomChar() {
    let randomChar = Math.floor (Math.random() * characters.length) 
    return (characters[randomChar])
}

function getRandomPswd(){
  let pswd = ""
  for (let i = 0; i < pswdLength; i++) {
    pswd += getRandomChar()
  }
  return pswd
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


