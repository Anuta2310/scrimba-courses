const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pswdOneEl = document.getElementById("pswd-one")
let pswdTwoEl = document.getElementById("pswd-two")
document.getElementById("generate-btn").addEventListener("click", function()
{ let pswdOne = getRandomPswd()
  let pswdTwo = getRandomPswd()
  pswdOneEl.textContent = pswdOne
  pswdTwoEl.textContent = pswdTwo
})

let pswdLength = 15

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


