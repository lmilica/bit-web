"use strict";

function generateRandomNumber(limit) {
    return (Math.floor(Math.random() * limit));
}

function Player(name, lastName, number, image) {
    this.name = name;
    this.lastName = lastName;
    this.number = number;
    this.image = image;
}

function createPlayer(player) {
    //var replacements = document.querySelector("#replacements");
    var div = document.createElement('div');
    var img = document.createElement('img');
    var spanFirstName = document.createElement('span');
    var spanLastName = document.createElement('span');
    var numberPlayer = document.createElement('span');

    div.classList.toggle('player-container');
    img.setAttribute('src', player.image);
    numberPlayer.textContent = player.number;
    spanFirstName.textContent = player.name;
    spanLastName.textContent = player.lastName;

    div.appendChild(img);
    div.appendChild(numberPlayer);
    div.appendChild(spanFirstName);
    div.appendChild(spanLastName);
    return div;
}

function selectPlayers() {
    while (availablePlayers.length) {
        var randomNumber = generateRandomNumber(availablePlayers.length);

        if (availablePlayers.length > 5) {
            mainPlayers.appendChild(createPlayer(availablePlayers[randomNumber]));
        } else {
            replacements.appendChild(createPlayer(availablePlayers[randomNumber]));
        }

        availablePlayers.splice(randomNumber, 1);
    }
}

function switchPlayers() {
    var arrayMainPlayers = mainPlayers.querySelectorAll('.player-container');
    var arrayReplacementPlayers = replacements.querySelectorAll('.player-container');

    var theMainPlayer = arrayMainPlayers[generateRandomNumber(arrayMainPlayers.length)];
    var theReplacementPlayer = arrayReplacementPlayers[generateRandomNumber(arrayReplacementPlayers.length)];

    var previousReplacementPlayer = theReplacementPlayer.previousSibling;
    var nextReplacementPlayer = theReplacementPlayer.nextSibling;

    theMainPlayer.before(theReplacementPlayer);

    if (previousReplacementPlayer) {
        previousReplacementPlayer.after(theMainPlayer);
    } else {
        nextReplacementPlayer.before(theMainPlayer);
    }
}

var mainPlayers = document.querySelector('#main-players');
var replacements = document.querySelector('#replacements');



var availablePlayers = [
    new Player("Arijanet", "Muric", '49', "./images/2019-aro-muric_2603.png"),
    new Player("Aymeric", "Laporte", "14", "./images/2019-aymeric-laporte_0526.png"),
    new Player("Benjamin", "Mendy", "22", "./images/2019-benjamin-mendy_1697.png"),
    new Player("Claudio", "Bravo", "1", "./images/2019-claudio-bravo_1052.png"),
    new Player("David", "Silva", "25", "./images/2019-david-silva_1397.png"),
    new Player("Ederson", "Moraes", "31", "./images/2019-ederson-moraes_0359.png"),
    new Player("Fernandinho", "Rosa", '25', "./images/2019-fernandinho_1592.png"),
    new Player("John", "Stones", "5", "./images/2019-john-stones_0772_.png"),
    new Player("Kyle", "Walker", "2", "./images/2019-kyle-walker_1111.png"),
    new Player("Nicolas", "Otamendi", "30", "./images/2019-nicolas-otamendi_0429.png"),
    new Player("Philippe", "Sandler", "34", "./images/2019-philippe-sandler_1876.png"),
    new Player("Angeliño", "Esmoris", '12', "./images/angelino.png"),
    new Player("Joao", "Cancelo", '27', "./images/cancelo_121145.png"),
    new Player("Scott", "Carson", '33', "./images/carson.png"),
    new Player("Eric", "Garcia", '50', './images/garcia.png'),
    new Player("Rodrigo", "Hernandez", '16', './images/rodri.png')
];

selectPlayers();
setInterval(switchPlayers, 5000);