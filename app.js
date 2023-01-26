//clock
// varible

const HourEl = document.getElementById("hour");
const mintueEl = document.getElementById("mintue");
const secondEl = document.getElementById("second");

// functions  clock

function setTime() {
  const currenTime = new Date();
  const secondRatio = currenTime.getSeconds() / 60;
  const mintueRatio = (secondRatio + currenTime.getMinutes()) / 60;
  const hourRatio = (mintueRatio + currenTime.getHours()) / 12;

  wareegsame(secondEl, secondRatio);
  wareegsame(mintueEl, mintueRatio);
  wareegsame(HourEl, hourRatio);
}

// anther function

function wareegsame(element, rotationRatio) {
  element.style.setProperty("--wareeg", rotationRatio * 360);
}

setTime();
setInterval(setTime, 1000);


// Buttons
// varible


const btnOne = document.getElementsByClassName('button1');
const btnTwo = document.getElementsByClassName('button2');
const btnThree = document.getElementsByClassName('button3');
const btnFour = document.getElementsByClassName('button4');

// u yeddh labad butonsk yo scada
const clock = document.querySelector(".clock")
const buttons = document.querySelectorAll(".button")


// change nodelist to arrt

const buttonsArray = Array.from(buttons);

// color iyan kaydi

const colors = ["#fad490", "#f19292", "#edf0f2", "#ffe100"];


// Eventlisner 


buttonsArray[0].addEventListener('click', changeToorange);
buttonsArray[1].addEventListener('click', changeToRed);
buttonsArray[2].addEventListener('click', changeToGrey);
buttonsArray[3].addEventListener('click', changeToYellow);






//ornage

function changeToorange() {

    clock.style.background = colors[0];
}
function changeToRed() {

    clock.style.background = colors[1];
}
function changeToGrey() {

    clock.style.background = colors[2];
}
function changeToYellow() {

    clock.style.background = colors[3];
}