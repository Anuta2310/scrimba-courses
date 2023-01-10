import { menuArray } from './data.js';
console.log (menuArray)

function getMenuHtml() {
  let menuHtml = '';
  menuHtml += ``
  return menuHtml
}

function render(){
  document.getElementById('menu').innerHTML = getMenuHtml()
}

render()