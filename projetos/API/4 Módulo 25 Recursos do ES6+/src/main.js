const alunos = ['Gabriela', 'Guilherme', 'Leonardo', 'Jessica', 'Vinicis', 'Fabricio'];

const geraNota = () => Math.floor(Math.random() * 11);

const objetoAlunos = alunos.map(aluno => ({
    nome: aluno,
    nota: geraNota()
}))

const filtraAluno = aluno => objetoAlunos.filter(aluno => aluno.nota >= 6)

console.log(filtraAluno(objetoAlunos));