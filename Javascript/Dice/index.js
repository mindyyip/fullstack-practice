function getNewDice()
{
    var randomNumber = Math.floor(Math.random()*6) + 1;
    var newDice = "images/dice" + randomNumber +".png";
    return newDice
}
var dice1 = getNewDice();
var dice2 = getNewDice();

document.getElementsByClassName("img1")[0].setAttribute("src", dice1);
document.getElementsByClassName("img2")[0].setAttribute("src", dice2);

if (dice1 > dice2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (dice1 === dice2)
{
    document.querySelector("h1").innerHTML = "Draw!"
}
else
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}