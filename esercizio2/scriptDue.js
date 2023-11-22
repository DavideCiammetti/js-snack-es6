'use strict';
// nome, punti fatti, falli subiti
const squadraDiCalcio = [

    {
        'nome': 'Roma',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Milan',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Inter',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Lazio',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Juve',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Napoli',
        'puntiFatti': 0,
        'falliSubiti': 0
    }
];

const valoriPartita = [
    {

    },
]

// creo viariabile per numeri random
let randomFalli = Math.floor(Math.random() * 150);
let  randomPunti = Math.floor(Math.random() * 150);

squadraDiCalcio.map((element)=>{

    let {nome, falliSubiti} = squadraDiCalcio;
    // creo numeri random
    randomFalli = Math.floor(Math.random() * 150);
    randomPunti = Math.floor(Math.random() * 150);
    falliSubiti = randomFalli;

    console.log(`nome: ${element.nome}`);
    console.log(`i falli subiti sono: ${falliSubiti}`);

});
