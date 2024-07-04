function Produto(nome, preco, estoque, marca, dataDeFabricacao) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
    this.marca = marca;
    this.dataDeFabricacao = new Date(dataDeFabricacao);

    this.exibirDetalhes = function() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$${this.preco.toFixed(2)}`);
        console.log(`Estoque: ${this.estoque}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Data de Fabricação: ${this.dataDeFabricacao.toDateString()}`);
        console.log(`Potencia: ${this.potencia}`);
        console.log(`Voltagem: ${this.voltagem}`);
    }

    this.aplicarDesconto = function(porcentagem) {
        const desconto = this.preco * (porcentagem / 100);
        this.preco -= desconto;
        console.log(`Novo preço após ${porcentagem}% de desconto: R$${this.preco.toFixed(2)}`);
    }

    this.verificarDisponibilidade = function() {
        return this.estoque > 0;
    }
}

function Eletronico(nome, preco, estoque, marca, dataDeFabricacao, voltagem, potencia) {
    Produto.call(this, nome, preco, estoque, marca, dataDeFabricacao);
    
    this.voltagem = voltagem;
    this.potencia = potencia;
}

function UtensilioCozinha(nome, preco, estoque, marca, dataDeFabricacao) {
    Produto.call(this, nome, preco, estoque, marca, dataDeFabricacao);
}

const eletronico = new Eletronico("Geladeira", 2000, 7, "Brastemp", "2023-07-04", 200, 2500);
const eletronico1 = new Eletronico("Videogame", 2000, 25, "Xbox", "2023-10-10", 120, 1500);
const utensilioCozinha = new UtensilioCozinha("Panela", 350, 19, "Tramontina", "2023-12-20");
const utensilioCozinha1 = new UtensilioCozinha("Moedor de pimenta", 400, 0, "Le Creuset", "2024-01-20");

eletronico.exibirDetalhes();
eletronico1.aplicarDesconto(10);
console.log(utensilioCozinha.verificarDisponibilidade());
console.log(utensilioCozinha1.verificarDisponibilidade());

console.log(eletronico);
console.log(eletronico1);
console.log(utensilioCozinha);
console.log(utensilioCozinha1);
