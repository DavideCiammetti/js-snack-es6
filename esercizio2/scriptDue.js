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
        'nomeSquadra': '',
        'falli': 0
    },
    {
        'nomeSquadra': '',
        'falli': 0
    },
    {
        'nomeSquadra': '',
        'falli': 0
    },
    {
        'nomeSquadra': '',
        'falli': 0
    },
    {
        'nomeSquadra': '',
        'falli': 0
    },
    {
        'nomeSquadra': '',
        'falli': 0
    },
]

// creo viariabile per numeri random
let randomFalli = Math.floor(Math.random() * 150);
let  randomPunti = Math.floor(Math.random() * 150);

squadraDiCalcio.map((element)=>{
    let {nomeSquadra, falli} = valoriPartita;
    let {nome, falliSubiti} = squadraDiCalcio;
    // creo numeri random
    randomFalli = Math.floor(Math.random() * 150);
    randomPunti = Math.floor(Math.random() * 150);
    falliSubiti = randomFalli;
    // prendo valori per secondo array
    falli = falliSubiti;
    nomeSquadra = element.nome;

    // stampo il nome e i falli delle squadre nel secondo array
    console.log(`nome: ${nomeSquadra}`);
    console.log(`i falli subiti sono: ${falli}`);

});
