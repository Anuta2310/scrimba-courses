const lengthConvertRatio = 3.281
const volumeConvertRatio = 3.785
const massConvertRatio = 2.205
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
  lengthOutput.innerHTML = `${inputEl.value} meters = ${(inputEl.value * lengthConvertRatio).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / lengthConvertRatio).toFixed(3)} meters`

  volumeOutput.innerHTML = `${inputEl.value} liters = ${(inputEl.value / volumeConvertRatio).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value * volumeConvertRatio).toFixed(3)} liters`

  massOutput.innerHTML = `${inputEl.value} kilos = ${(inputEl.value * massConvertRatio).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / massConvertRatio).toFixed(3)} kilos`
})