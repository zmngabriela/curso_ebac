"use strict";

var _this = void 0;
// arrow function:

var minhaFuncao = function minhaFuncao() {
  console.log('oi');
};
minhaFuncao();

// outra opcao:

var minhaFuncao2 = function minhaFuncao2() {
  return 'oi';
};
console.log(minhaFuncao2());

// outra funcao simplificada:

var minhaFuncao3 = function minhaFuncao3() {
  return 'oi';
};
console.log(minhaFuncao3());

// pra retornar objetos:

// const retornaTchau = () => {
//     return { podemos omitir a palavra return
//         modelo: 'Ka',
//         fabricante: 'Ford'
//     }
// }

var retornaTchau = function retornaTchau() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
console.log(retornaTchau());

// se a gente for usar a arrow function na aula passada:
// essa parte e so pra ter info, copiei do outro arquivo:
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtualNoArray) {
  itemAtualNoArray = {
    nome: itemAtualNoArray,
    curso: 'Frontend'
  };
  return itemAtualNoArray;
});

// como aluno e o argumento, no arrow function tambem passamos argumento, ele fica no parenteses.
// quando temos somente um argumento, nao precisa colocar os parenteses. parenteses e usado pra quando nao tem argumento, ou se tem mais de um.
var filtraAlunosBackend = function filtraAlunosBackend(aluno) {
  return aluno.curso === 'Frontend';
};
var alunosFrontend = alunos2.filter(filtraAlunosBackend);
console.log(alunosFrontend);

// as arrow function tem um escopo diferentes das outras.

var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    console.log(_this); // o this dentro da arrow function nao funciona no terminal, somente nos navegadores atuais
    _this.velocidadeAtual - +10; // por isso normalmente quando temos que usar o this, usamos a funcao convensional
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);