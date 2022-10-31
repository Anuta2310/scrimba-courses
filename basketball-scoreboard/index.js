// initial declarations and outputs
let homePoints = 0
let guestPoints = 0
let homePointsEl = document.getElementById("home-points")
homePointsEl.textContent = homePoints
let guestPointsEl = document.getElementById("guest-points")
guestPointsEl.textContent = guestPoints

// functions for Home buttons
function addHomePoints1() {
  homePoints += 1
  homePointsEl.textContent = homePoints
}
function addHomePoints2() {
  homePoints += 2
  homePointsEl.textContent = homePoints
}
function addHomePoints3() {
  homePoints += 3
  homePointsEl.textContent = homePoints
}

// functions for Guest buttons
function addGuestPoints1() {
  guestPoints += 1
  guestPointsEl.textContent = guestPoints
}
function addGuestPoints2() {
  guestPoints += 2
  guestPointsEl.textContent = guestPoints
}
function addGuestPoints3() {
  guestPoints += 3
  guestPointsEl.textContent = guestPoints
}
// new game
function newGame() {
  homePoints = 0
  homePointsEl.textContent = homePoints
  guestPoints = 0
  guestPointsEl.textContent = guestPoints
}