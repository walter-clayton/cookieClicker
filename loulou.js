var score = 0;
var multiplicateur = 1;
var prixMultiplicateur= 50;
var prixAutoclic = 50; // 500
var prixBonus = 50; // 5000
var timeBonus = 30; // 30 sec
var timeAutoclicker = 60; // 60 sec
var cliquerCookie = document.getElementById('clic');
var afficherScore = document.getElementById('affichage');
var afficherMultiplier = document.getElementById("multiplier");
var acheterAutoclicker = document.getElementById("autoclic");
var acheterBonus = document.getElementById("bonus");
var afficheTest = document.getElementById('test');
var intervalId = null;
var intervalId2 = null;

function augmenterScore() {
    score = score + (1 * multiplicateur);
    afficheScore();
}

function afficheScore() {
    afficherScore.innerHTML = score;
}

function augmenterMultiplicateur() {
    if (score >= prixMultiplicateur) {
        multiplicateur = multiplicateur + 1;
        score = score - prixMultiplicateur;
        prixMultiplicateur = prixMultiplicateur * 2;
        //afficherScore.innerHTML = score;
        afficheScore();
        afficheMultiplicateur();
    }
}

function afficheMultiplicateur() {
    afficherMultiplier.innerHTML = 'Multiplicateur x '+multiplicateur.toString(10)+' Prix du prochain: '+prixMultiplicateur.toString(10);
}

function acheteAutoclicker () {
    if (score >= prixAutoclic) {
        score = score - prixAutoclic;
        acheterAutoclicker.disabled = true;
        startAutoclicker(true);
    } else {
        //acheterAutoclicker.disabled = false;
    }
}

function startAutoclicker(start) {
    let intervalID4 = null;

    if (start == true) {
        intervalID4 = setInterval( augmenterScore, 1000);
    } else {
        clearTimeout(intervalID4);
    }
}

function acheteBonus() {
    if (score >= prixBonus) {
        score = score - prixBonus;
        afficheScore();
        afficheBonus();
        //acheterAutoclicker.disabled = true;
    } else {
        //acheterAutoclicker.disabled = false;
    }   
}

function afficheBonus() {
    let timeB = timeBonus;
    let intervalID3 = null;
    while (timeB > 0) {
        intervalID3 = setTimeOut("timeB = timeB - 1", 1000);
        acheterBonus.innerHTML = 'Bonus - Reste '+timeB.toString()+' sec.';
        //timeB = timeB - 1;
        clearTimeout(intervalID3)
    }
    

}

function autoclicker() {
    afficheTest.innerHTML = score;
    if (score >= 200) {
        intervalID2 = setInterval(augmenterScore, 1000);
    } else {
        clearInterval(intervalID2);
    }
}

function boucleControl() {
    //intervalID = setInterval(autoclicker, 500);
}

function initCookieClicker() {
    cliquerCookie.onclick = augmenterScore();
    acheterAutoclicker.disabled = false;
}