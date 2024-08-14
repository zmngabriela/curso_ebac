// js e uma linguagem single thread
// so consegue fazer o processamento em um processador

// pcs tem um chip/processador e dentro tem os processadores logicos
// duo core, quad core, octo core etc
// muitas vezes os pc tem mais de um processador logico

// mas o js opera em somente um desses nucleos

// imagina que temos essas tarefas pra executar:

// A B C D

// no js isso vai ser operado em forma sequencial / sincrona

// em outras linguagens de backend a gente consegue operar em outras sequencias e asincronos/ em paralelo

// A B
// C D

// depois do ES6+ foi incluido no js o async e await

function funcaoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

console.log('inicio');
console.log(funcaoPesada());
console.log('fim');

// mas imagina que estamos listando produtos e carregar as infos do user
// e ainda fazendo a integracao de um api
// e logo depois dessas requisicoes, ainda temos a execucao de um carrosel, validacao formulario
// tudo o q ta em baixo nao sera carregado enquanto as de cima nao for terminadas

// no ES6+ tivemos a introducao das promisses
//e uma forma de fazer o multi thread, executar em paralelo

// pra converter uma funcao pesada em uma promise e mudar o fluxo do programa

// primeiro criar uma const
const funcaoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes); // no promise nao temos return
    } catch(e) {
        reject('Deu ruim');
    };
})

console.log('inicio');
funcaoPesadaPromise.then(resultado => console.log(resultado)).catch(e => console.log(e));
console.log('fim');

// isso nao trava o processamento do programa, ele fez com que executasse em paralelo

// pra mostrar o erro definido dentro da promise, temos que usar o catch ao chamar a promise passando a funcao como argumento

// async e await

// como converter uma funcao sincrona pra assincrona de novo

async function execucaoPrincipal() {
    console.log('inicio');

    await funcaoPesadaPromise.then(resultado => console.log(resultado)).catch(e => console.log(e));

    console.log('fim');
}
execucaoPrincipal();

// existe outra forma de usar o await:

// isso e pra dar parametros pra uma promise:
const promiseParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuario: ${login}`)
        }, 3000);
    })
}

async function execucaoPrincipal2() {
    console.log('hey');

    // isso e pra dar parametros pra uma promise:
    await promiseParametros('gabs-z@gmail.com',  123456).then(resultado => {
        console.log(resultado);
    })

    try { // dessa maneira precisa colocar dentro do try pq se nao ele nao usa a mensagem de erro que colocamos no catch do promise
        const resultado = await funcaoPesadaPromise;
        console.log(`${resultado}1`);
    } catch(e) {
        console.log(e)
    }

    console.log('xauu');
}
execucaoPrincipal2();
