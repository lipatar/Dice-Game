// var dicee = [];
var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

var dicePlayer1 = "images/dice" + player1 + ".png";
var dicePlayer2 = "images/dice" + player2 + ".png";

if (player1 > player2) {
  document.querySelector("h1").textContent = "Players 1 wins!";
} else if (player1 === player2) {
  document.querySelector("h1").textContent = "Draw!";
} else {
  document.querySelector("h1").textContent = "Players 2 wins!";
}

document.querySelector(".img1").setAttribute("src", dicePlayer1);
document.querySelector(".img2").setAttribute("src", dicePlayer2);

console.log(player1);
console.log(player2);