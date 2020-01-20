// var randomNumber1 = Math.random();
// randomNumber1 = randomNumber1 * 6;
// randomNumber1= Math.floor(randomNumber1) + 1;

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number 1-6
var randomImage = "dice" + randomNumber1 + ".png"; //random image 1-6
var randomSource = "images/" + randomImage; //random image source
var image1 = document.querySelectorAll("img")[0]; //left image1
image1.setAttribute("src", randomSource); //creates random image left

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random number 1-6
var randomImage2 = "dice" + randomNumber2 + ".png"; //random image 1-6
var randomSource2 = "images/" + randomImage2; //random image source
var image2 = document.querySelectorAll("img")[1]; //right image1
image2.setAttribute("src", randomSource2); //creates random image right

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!✨";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!✨";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw! Refresh the Page";
}
