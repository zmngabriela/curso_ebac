// no typescript nao podemos ter a mesma variavel em dois arquivos
// pra isso precisamos criar difrerentes pastas

// pra resolver isso, podemos colocar a variavel dentro de um namespace:
namespace casting {
    let idade: any = 25;
    idade.toFixed(); // se queremos pegar uma funcao que e somente de numeros
    (idade as number).toFixed; // se fazer assim ja vemos que idade e numero
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x)
    }) 
    // a tecnica casting e util por exemplo numa API recebemos um nome e colocar como any, e podemos fazer (.. as string)
    // tb podemos ter uma string e podemos atribuir um numero
    let nome: string = 35 as unknown as string;
}