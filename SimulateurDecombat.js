class Combattant {
    constructor(nom, pointsDeVie, attaque, precision) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.attaque = attaque;
        this.precision = precision;
    }

    attaquer(adversaire) {
        const chance = Math.random();
        if (chance < this.precision) {
            adversaire.pointsDeVie -= this.attaque;
            enregistrerCombat("${this.nom} attaque ${adversaire.nom} et inflige ${this.attaque} dégâts.");
        } else {
            enregistrerCombat("${this.nom} a raté son attaque contre ${adversaire.nom}.");
        }
    }
}

function enregistrerCombat(message) {
    const journal = document.getElementById("combat-log");
    journal.innerHTML += "<p>${message}</p>";
    journal.scrollTop = journal.scrollHeight;
}

function lancerCombat() {
    const combattant1 = new Combattant("Alexander", 100, 12, 0.75); 
    const combattant2 = new Combattant("Romolus", 100, 12, 0.75); 

    enregistrerCombat("Le combat commence !");
    while (combattant1.pointsDeVie > 0 && combattant2.pointsDeVie > 0) {
        combattant1.attaquer(combattant2);
        if (combattant2.pointsDeVie <= 0) {
            enregistrerCombat("${combattant2.nom} a perdu ! ${combattant1.nom} est le vainqueur.");
            break;
        }

        combattant2.attaquer(combattant1);
        if (combattant1.pointsDeVie <= 0) {
            enregistrerCombat("${combattant1.nom} a perdu ! ${combattant2.nom} est le vainqueur.");
            break;
        }

        enregistrerCombat(`Points de vie restants : ${combattant1.nom} (${combattant1.pointsDeVie}) | ${combattant2.nom} (${combattant2.pointsDeVie})`);
    }
}

document.getElementById("start-fight").addEventListener("click", lancerCombat);

class Fighter {
    constructor(name, health, attack, accuracy) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.accuracy = accuracy;
    }

    attackOpponent(opponent) {
        const chance = Math.random();
        if (chance < this.accuracy) {
            opponent.health -= this.attack;
            console.log("${this.name} attaque ${opponent.name} et inflige ${this.attack} dégâts.");
        } else {
            console.log("${this.name} rate son attaque contre ${opponent.name}.");
        }
    }
}

function simulateCombat(fighter1, fighter2) {
    console.log("⚔️ Le combat commence ! ⚔️");
    console.log("${fighter1.name} (PV : ${fighter1.health}) VS ${fighter2.name} (PV : ${fighter2.health})");
    console.log("-------------------------------");

    while (fighter1.health > 0 && fighter2.health > 0) {
        fighter1.attackOpponent(fighter2);
        if (fighter2.health <= 0) {
            console.log("❌ ${fighter2.name} a perdu ! 🏆 ${fighter1.name} remporte la victoire !");
            break;
        }

        fighter2.attackOpponent(fighter1);
        if (fighter1.health <= 0) {
            console.log("❌ ${fighter1.name} a perdu ! 🏆 ${fighter2.name} remporte la victoire !");
            break;
        }

        console.log("Reste de vie : ${fighter1.name} (${fighter1.health}) - ${fighter2.name} (${fighter2.health})");
        console.log("-------------------------------");
    }

    console.log("⚪ Combat terminé ⚪");
}

let Alexander = new Fighter("Alexander", 100, 12, 0.75); 
let Romolus = new Fighter("Romolus", 100, 12, 0.75); 

simulateCombat(Alexander, Romolus);
