var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImageFor1 = "images/dice"+ randomNumber1 + ".png"
var randomDiceImageFor2 = "images/dice"+ randomNumber2 + ".png"


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImageFor1)

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImageFor2)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player-1 Win !!! 🚩 "
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player-2 Win !!! 🚩 "
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Game Draw/Tie !!! 🚩 "
}