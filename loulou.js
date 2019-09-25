var score = 0;
var multiplicateur = 1;
var prixMultiplicateur= 50;
var prixAutoclic = 50; // 500
var prixBonus = 50; // 5000
var timeBonus = 30; // 30 sec 
var pourcentageBonus = 200; // % bonus
var bBonus = false;
var timeAutoclicker = 15; // 60 sec
var cliquerCookie = document.getElementById('clic');
var afficherScore = document.getElementById('affichage');
var afficherMultiplier = document.getElementById("multiplier");
var afficherMults = document.getElementById("mults");
var acheterAutoclicker = document.getElementById("autoclic");
var acheterBonus = document.getElementById("bonus");
var acheterBonnus = document.getElementById("bonnus"); //A la place de l'id bonus, j'affiche dans l'id bonnus: div qui se trouve plus haut.
var afficheTest = document.getElementById('test');
var intervalId = null;
var intervalId2 = null;

window.onload = initCookieClicker;

function augmenterScore() {
    if (bBonus == true) {
        score = score + ((pourcentageBonus/100) * multiplicateur);;
    } else {
        score = score + (1 * multiplicateur);
    }    
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
    afficherMults.innerHTML = 'Multiplicateur x '+multiplicateur.toString(10)+ '<br>' +' Prix du prochain: '+prixMultiplicateur.toString(10);
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

function startAutoclicker(startAutoclicker) {
    let intervalID4 = null;
    let timer = timeAutoclicker;

    if (startAutoclicker == true) {
        intervalID4 = setInterval( function() {
            augmenterScore(); 
            if (--timer < 0) {
                clearInterval(intervalID4);
            }
        }, 1000);
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
    startBonus(true);
}

function startBonus(startBonus) {
    let intervalID5 = null;
    let timer = timeBonus;
    let tempMutiplicateur = multiplicateur
    
    if (startBonus == true) {
        intervalID5 = setInterval(function() {
            bBonus = true; 
            acheterBonus.disabled = true; 
            acheterBonnus.innerHTML = 'Bonus - Reste '+timer+' sec.'; 
            if (--timer < 0) {
                clearInterval(intervalID5); 
                bBonus = false;
                acheterBonus.disabled = false;
                acheterBonus.innerHTML = 'Acheter Bonus'; 
            } 
        }, 1000);
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

/* button mouve on clic */
function initCookieClicker() {
    afficheMultiplicateur();
    acheterBonnus.innerHTML = 'Bonus';
    //cliquerCookie.onclick = augmenterScore();
    //acheterAutoclicker.disabled = false;
}


function smallbutton() {
    document.getElementById("clic").style.height = "14rem";
    
}

function normalbutton() {
    document.getElementById("clic").style.height = "15rem";
    
}

function zoombutton() {
    document.getElementById("clic").style.height = "16rem";
    
}
/* button mouve on clic END*/



setInterval(function() {
    if (score >= prixMultiplicateur) {
        afficherMultiplier.disabled = false;
    } else {
        afficherMultiplier.disabled = true;
    }
    if (score >= prixAutoclic) {
        acheterAutoclicker.disabled = false;
    } else {
        acheterAutoclicker.disabled = true;
    }
    if (score >= prixBonus) {
        acheterBonus.disabled = false;
    } else {
        acheterBonus.disabled = true;
    }
}, 20);

function playSound() {
    
}
const mySound = document.getElementById("audio");   
const correctButton = document.getElementById("Clic");
Clic.addEventListener("click", function(){ mySound.play(); })

/*BONUS IMAGE RANDOM */
function moveIt() {
    picture = document.getElementById("image");
    spaceW = screen.height - picture.height;
    spaceH = screen.width - picture.width;

    
    
    picture.style.top = Math.round(Math.random() * spaceW) + "px";
    picture.style.left = Math.round(Math.random() * spaceH) + "px";
}

setInterval(function(){ var x = document.getElementById("image").style.visibility = "visible"; moveIt();
 }, 30000); 
 setInterval(function(){ var x = document.getElementById("image").style.visibility = "hidden";
 }, 32000); 

 function bonusclic() {
    score = score * 2
    afficheScore()
    var x = document.getElementById("image").style.visibility = "hidden"
    var audio = document.getElementById("audio2");
    audio.play();
  }

  /*BONUS RANDOM END*/