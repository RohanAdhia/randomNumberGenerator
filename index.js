// alert("Hey! I'm an Alert!")
var randomButton = document.getElementById("randomBtn");
var resetButton = document.getElementById("resetBtn");
var rangeButton = document.getElementById("rangeBtn");
var rangeTextbox = document.querySelectorAll('.textBox');
var rangeTextbox1 = document.getElementById("rangeText1");
var rangeTextbox2 = document.getElementById("rangeText2");
var text = document.getElementById("randomNumber");
var min = 1;
var max = 100;

function randomNumberGenerator(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  //The maximum is exclusive and the minimum is inclusive
}

randomButton.addEventListener("click", function() {
  if (rangeTextbox[0].style.display === "none") {
    min = 1;
    max = 100;
  } else {
    var min = rangeTextbox1.value;
    var max = rangeTextbox2.value;
  }
  var a = randomNumberGenerator(min, max);
  text.innerHTML = a
});

resetButton.addEventListener("click", function() {
  text.innerHTML = "Just Some Random Number!";
  rangeTextbox1.value = 1;
  rangeTextbox2.value = 100;
  rangeTextbox[0].style.display = "none";
  rangeTextbox[1].style.display = "none";
});

rangeButton.addEventListener("click", function() {
  rangeTextbox[0].style.display = "inline";
  rangeTextbox[1].style.display = "inline";
});

function js_Load() {
  document.body.style.visibility = 'visible';
}
