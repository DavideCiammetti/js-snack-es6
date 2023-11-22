'use strict';
// Race, Endurance e Aero
const bici = [

    {
        'nome': 'Race',
        'peso': 800
    },
    {
        'nome': 'Endurance',
        'peso': 1200
    },
    {
        'nome': 'Aereo',
        'peso': 750
    }
];



let biciPiuPesante = bici[0]; 
let nameBike = '';
const {nome, peso} = bici;

for(let i = 0; i < bici.length; i++){

    if(bici[i].peso > biciPiuPesante.peso){
        biciPiuPesante = bici[i];
        nameBike = bici[i].nome;
    }
}

console.log(biciPiuPesante.peso);
console.log(nameBike);

let bikeScreen = document.createElement('div');  
let pesoBici = document.createElement('div');
const container = document.querySelector('.container');

bikeScreen.innerHTML =  `<div> <p>nome: ${nameBike}</p> </div>`;
pesoBici.innerHTML =  `<div> <p>peso: ${biciPiuPesante.peso}</p> </div>`;

container.append(bikeScreen);
container.append(pesoBici);