// Snack 1
// Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const biciclette = [
    {
        "nome": "Bici in Acciaio",
        "peso": 12
    },
    {
        "nome": "Bici in Alluminio",
        "peso": 10
    },
    {
        "nome": "Bici in Alluminio",
        "peso": 6
    },
    {
        "nome": "Bici in Alluminio",
        "peso": 9
    }
]



// Creo una variabile alla quale assegno un valore da cui partire nel confronto con le altre bici

let pesoLeggero = biciclette[0];

// Ciclo sull'array di oggetti utilizzando il for in

for (let bici in biciclette) {

    if (biciclette[bici].peso < pesoLeggero.peso) { // SE il peso di ogni bici è minore del peso di partenza


        pesoLeggero = biciclette[bici]; // Riassegno al peso di partenza il peso della bici più leggera

    }

}

console.log(pesoLeggero);



// Stampare a schermo la bici con peso minore.

const biciPiuLeggera = document.getElementById('lightest_bike');

biciPiuLeggera.innerHTML = `La bici più leggera è la ${pesoLeggero.nome} e pesa solo ${pesoLeggero.peso} kg! 🚴`;



// Snack2

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadre = [
    {
        "nome": "Squadra-1",
        "punti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Squadra-2",
        "punti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Squadra-3",
        "punti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Squadra-4",
        "punti": 0,
        "falliSubiti": 0
    }
]



// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

// Creo una funzione per generare numeri random

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Ciclo sull'array passo l'esecuzione della funzione,alle proprietà dell'oggetto

for (let squadra in squadre) {

    squadre[squadra].punti = getRandomNum(0, 50);
    squadre[squadra].falliSubiti = getRandomNum(0, 50);

    console.log(squadre[squadra].punti, squadre[squadra].falliSubiti);
}



// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// METODO 1
// Push delle proprietà di un oggetto all'interno di un nuovo array

// Creo un nuovo array
const nuovoArraySquadre = [];

// Ciclo sull'array squadre

for (indiceSquadra in squadre) {

    // Inserisco nome e falli subiti nel nuovo array

    nuovoArraySquadre.push(
        squadre[indiceSquadra].nome,
        squadre[indiceSquadra].falliSubiti
    )

}

console.log(nuovoArraySquadre);



// METODO 2
// Push di un oggetto all'interno di un nuovo array

// const nuovoArraySquadre = [];

// // Ciclo sull'array squadre

// for (indiceSquadra in squadre) {

//     // Inserisco nome e falli subiti nel nuovo array

//     nuovoArraySquadre.push(
//         {
//             "nome": squadre[indiceSquadra].nome,
//             "falliSubiti": squadre[indiceSquadra].falliSubiti
//         }
//     )

//     console.log(
//         nuovoArraySquadre[indiceSquadra].nome,
//         nuovoArraySquadre[indiceSquadra].falliSubiti
//     )

// }