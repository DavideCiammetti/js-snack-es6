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

// creo viariabile per numeri random
let randomFalli = Math.floor(Math.random() * 150);
let  randomPunti = Math.floor(Math.random() * 150);

// console.log(random);

squadraDiCalcio.map((element)=>{
    let {puntiFatti, falliSubiti} = squadraDiCalcio;
    randomFalli = Math.floor(Math.random() * 150);
    randomPunti = Math.floor(Math.random() * 150);
    puntiFatti = randomPunti;
    falliSubiti = randomFalli;

    console.log(`i punti fatti sono: ${puntiFatti}`);
    console.log(`i falli subiti sono: ${falliSubiti}`);
    return element;
});
