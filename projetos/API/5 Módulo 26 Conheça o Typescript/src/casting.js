"use strict";
// no typescript nao podemos ter a mesma variavel em dois arquivos
// pra isso precisamos criar difrerentes pastas
// pra resolver isso, podemos colocar a variavel dentro de um namespace:
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed(); // se queremos pegar uma funcao que e somente de numeros
    idade.toFixed; // se fazer assim ja vemos que idade e numero
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
    // a tecnica casting e util por exemplo numa API recebemos um nome e colocar como any, e podemos fazer (.. as string)
    // tb podemos ter uma string e podemos atribuir um numero
    let nome = 35;
})(casting || (casting = {}));
