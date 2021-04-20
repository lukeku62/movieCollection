"use strict";
/*const num=4;
const nome="keku";
let isDeveloper=true;
let nullo=null;
let un=undefined;
let sym= Symbol ('simbolo');

let casa = {
    piani : 5,
    descrizione : "Casa con giardino"
}
console.log(typeof num);
console.log(nome);
console.log(casa.descrizione);*/

/*var esameSuperato, voto=11;
esameSuperato = voto>=18 ? true : false;
console.log("esame superato: "+esameSuperato);*/

/*function somma(n1,n2){
    return n1+n2;
}

let num1=3,num2=4;
console.log(somma(num1,num2));*/

// var nome = 'keku';
// console.log('ciao '+nome);

// // var a=10,b=20;
// // console.log('don bobo avra '+ (a+b) + ' anni un giorno');

// var cognome = 'pecus';

// function descrizione(nome,cognome){
//     return `Mi chiamo ${nome} ${cognome}`;
// }

// console.log(descrizione(nome,cognome));

// var user = {
//     nome : 'keku',
//     cognome : 'pecus',
//     anni : 24,
// }
// console.log(`buonasera dottor ${user.nome.toUpperCase()} ${user.cognome.toUpperCase()}`)ò

// let logCiao = (str = `Ciao`) => {
//     console.log(str);
// }

// logCiao('pocho golosun');

// let a = 1;
// let b = 4;

// if(a<b) {alert('valori uguali')};

// var parole = ['cacio', 'pocho', 'dominicanus', 'marzullo', 'petauro'];

// for(let i = 0; i < parole.length; i++){

//     console.log(`${parole[i].charAt(0).toUpperCase()}${parole[i].substring(1)}`);


// }

// var stringa = 'supercalifragilespichespiralidoso';
// if(stringa.length>16){
//     console.log(stringa.substring(0,16).concat('...'));
// }

var id = setInterval(frame, 5);

function myMove(){
    var elem = document.getElementById('animate');
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame,5);
    function frame(){
        if(pos == 350)
            clearInterval(id);
        else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }

    }
}







