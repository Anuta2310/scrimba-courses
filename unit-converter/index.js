const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
convertBtn.addEventListener("click", function(){
  convertLength()
  convertVolume()
  convertMass()
})
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

convertLength()
convertVolume()
convertMass()

function convertLength(){
  const outputOne = (inputEl.value * 3.281).toFixed(3)
  const outputTwo = (inputEl.value / 3.281).toFixed(3)
  const output = `${inputEl.value} meters = ${outputOne} feet | ${inputEl.value} feet = ${outputTwo} meters`  
  lengthOutput.innerHTML = output
}
function convertVolume(){
  const outputOne = (inputEl.value / 3.785).toFixed(3)
  const outputTwo = (inputEl.value * 3.785).toFixed(3)
  const output = `${inputEl.value} liters = ${outputOne} gallons | ${inputEl.value} gallons = ${outputTwo} liters`  
  volumeOutput.innerHTML = output
}
function convertMass(){
  const outputOne = (inputEl.value * 2.205).toFixed(3)
  const outputTwo = (inputEl.value / 2.205).toFixed(3)
  const output = `${inputEl.value} kilograms = ${outputOne} pounds | ${inputEl.value} pounds = ${outputTwo} kilograms`  
  massOutput.innerHTML = output
}