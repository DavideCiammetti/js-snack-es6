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


// creo variabile per indice di bici
let biciPiuPesante = bici[0]; 
// variabile per poi inserire nome
let nameBike = '';
// destructuring
const {nome, peso} = bici;

for(let i = 0; i < bici.length; i++){
    // prendo i pesi e salvo il maggiore in una variabile
    if(bici[i].peso > biciPiuPesante.peso){
        biciPiuPesante = bici[i];
        nameBike = bici[i].nome;
    }
}

console.log(biciPiuPesante.peso);
console.log(nameBike);
// creo 2 div per inserire gli elementi
let bikeScreen = document.createElement('div');  
let pesoBici = document.createElement('div');
// prendo il container dal html
const container = document.querySelector('.container');
// inderisco i tag con gli elementi all'interno del dom
bikeScreen.innerHTML =  `<div> <p>nome: ${nameBike}</p> </div>`;
pesoBici.innerHTML =  `<div> <p>peso: ${biciPiuPesante.peso}</p> </div>`;
// appendo gli elementi al container
container.append(bikeScreen);
container.append(pesoBici);



// secodo codice alternativo

// let biciPiuPesante = bici[0]; 
// let nameBike = '';

// bici.forEach((element)=>{
//     if(element.peso  > biciPiuPesante.peso){
//         biciPiuPesante = element;
//         nameBike = element.nome
//     }
    
   
// });
   
// console.log(biciPiuPesante.peso);
// console.log( nameBike);
// let bikeScreen = document.createElement('div');  
// let pesoBici = document.createElement('div');
// const container = document.querySelector('.container');

// bikeScreen.innerHTML =  `<div> <p>nome: ${nameBike}</p> </div>`;
// pesoBici.innerHTML =  `<div> <p>peso: ${biciPiuPesante.peso}</p> </div>`;

// container.append(bikeScreen);
// container.append(pesoBici);