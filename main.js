
let player1 = "Player1";
let player2 = "Player2";

function editNames() {
    player1 = prompt("Change Player1 Name")
    player2 = prompt("Change Player2 Name")

    if (player1.length < 1 || player2.length < 1) {
        alert('please enter valid name');
        return;
    }
    document.querySelector("p.Player1")
        .innerHTML = player1;

    document.querySelector("p.Player2")
        .innerHTML = player2;
}


const dice = document.getElementById('dice-btn');

function dicegame() {

 

    var randomNumber1 = Math.floor(Math.random()*6) + 1;
    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    var randomNumber3 = Math.floor(Math.random()*6) + 1;
     var randomNumber4 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "white/w-dice" + randomNumber1 + ".png";
var randomDiceImage2 = "white/w-dice" + randomNumber2 + ".png";
var randomDiceImage3 = "black/b-dice" + randomNumber3 + ".png";
var randomDiceImage4 = "black/b-dice" + randomNumber4 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", randomDiceImage3);

var image4 = document.querySelectorAll("img")[3];
image4.setAttribute("src", randomDiceImage4);

if (randomNumber1 + randomNumber2 > randomNumber3 + randomNumber4 ) {
    document.querySelector("h1").innerHTML = ("🏆 " + player1 + " wins by " + (randomNumber1+randomNumber2) + " points 🏆" );
}
else if(randomNumber3 + randomNumber4 > randomNumber1 + randomNumber2){
    document.querySelector("h1").innerHTML =  ("🏆 " + player2 + "  wins by " + (randomNumber3+randomNumber4) + " points 🏆" );
}
else {
    result.innerHTML = "Draw !"

}

}






