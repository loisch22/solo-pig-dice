//back-end logic
var generateRandom = function () {
  return Math.floor(Math.random() * 6) + 1;
}

function Player(name, roundScore, hold, totalScore) {
  this.name = name;
  this.roundScore = roundScore;
  this.hold = hold;
  this.totalScore =  totalScore;
}

Player.prototype.roll = function(randomNum) {
  return this.roundScore += randomNum;
}

var player1;
var player2;

//front-end logic
$(document).ready(function() {
  $("#inputPlayers").submit(function(event) {
    event.preventDefault();

    var player1Input = $("#player1").val();
    var player2Input = $("#player2").val();

    player1 = new Player(player1Input, 0, false, 0);
    player2 = new Player(player2Input, 0, false, 0);

    $(".player1Name").text(player1.name);
    $(".player2Name").text(player2.name);
    $("#gameConsole").show();
    $("#inputPlayers").hide();
  });
  $("#rollDice1").click(function(event) {
    event.preventDefault();

    var randomNum = generateRandom();
    var currentScore = player1.roll(randomNum);

    $(".randomNumberDisplay").text(randomNum);
    $(".roundScoreDisplay").text(currentScore);
  });
  $("#rollDice2").click(function(event) {
    event.preventDefault();

    var randomNum = generateRandom();
    var currentScore = player2.roll(randomNum);

    $(".randomNumberDisplay").text(randomNum);
    $(".roundScoreDisplay").text(currentScore);
  });
  $("#exit").click(function() {
    $("#gameConsole").hide();
    $("#inputPlayers").show();

    $("#player1").val('');
    $("#player2").val('');
  });

});
