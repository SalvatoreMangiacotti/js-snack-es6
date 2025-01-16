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

// Ciclo sull'array di oggetti

for (let bici in biciclette) {

    if (biciclette[bici].peso < pesoLeggero.peso) { // SE il peso di ogni bici è minore del peso di partenza


        pesoLeggero = biciclette[bici]; // Riassegno al peso di partenza il peso della bici più leggera

    }

}

console.log(pesoLeggero);

// Stampare a schermo la bici con peso minore.

const lightestBike = document.getElementById('lightest_bike');

lightestBike.innerHTML = `La bici più leggera è la ${pesoLeggero.nome} e pesa solo ${pesoLeggero.peso} kg! 🚴`;