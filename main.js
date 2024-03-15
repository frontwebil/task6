let point = document.getElementById("point");
let btnR = document.getElementById("btn-r");
let btnL = document.getElementById("btn-l");
let btnT = document.getElementById("btn-t");
let btnB = document.getElementById("btn-b");

let mgLeft = 15;
let mgTop = 11;

function goRight() {
  if (mgLeft < 320) {
    mgLeft = mgLeft + 34.8;
    point.style.marginLeft = mgLeft + "px";
  } else {
    alert("Далі ніяк(");
  }
}
function goLeft() {
  if (mgLeft > 15) {
    mgLeft = mgLeft - 34.8;
    point.style.marginLeft = mgLeft + "px";
  } else {
    alert("Далі ніяк(");
  }
}
function goBottom() {
  if (mgTop < 300) {
    mgTop = mgTop + 35.3;
    point.style.marginTop = mgTop + "px";
  } else {
    alert("Далі ніяк(");
  }
}
function goTop() {
  if (mgTop > 12) {
    mgTop = mgTop - 35.3;
    point.style.marginTop = mgTop + "px";
  } else {
    alert("Далі ніяк(");
  }
}

btnR.onclick = goRight;
btnL.onclick = goLeft;
btnB.onclick = goBottom;
btnT.onclick = goTop;

let colorBtn = document.getElementById("colorBtn");
const colorArr = ["aqua", "blue", "red", "orange", "silver", "white"];
let randomColor;

function randomBG() {
  randomColor = colorArr[Math.floor(Math.random() * 6)];
  document.bgColor = randomColor;
}

colorBtn.onclick = randomBG;
