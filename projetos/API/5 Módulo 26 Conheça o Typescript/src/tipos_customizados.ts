const alunos = [
    {
        nome: 'carlos',
        cursos: ['frontend', 'ux'],
        idade: 27
    },
    {
        nome: 'amanda',
        cursos: ['frontend', 'python'],
        idade: 25
    }
]

// alunos.push('julia');
// deu erro, pq o ts viu que temos um tipo customizado, objeto com string, string[] e numbero

alunos.push({
    nome: 'julia',
    cursos: ['backend', 'python'],
    idade: 30
}); // assim funciona

// tipo generico - isso geralmente fica em cima do cod
type aluno = {
    nome: string;
    cursos?: string[]; // ? e pra ser uma propriedade opcional
    idade: number;
}

const alunos2: aluno[] = [
    {
        nome: 'carlos',
        cursos: ['frontend', 'ux'],
        idade: 27
    },
    {
        nome: 'amanda',
        cursos: ['frontend', 'python'],
        idade: 25
    }
]

const novoAluno: aluno = {
    nome: 'lucas', // curso e opcional
    idade: 23
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome);
}