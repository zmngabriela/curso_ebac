function Produto(nome, preco, estoque, marca, dataDeFabricacao) {
    let _preco = preco;

    this.nome = nome;
    this.estoque = estoque;
    this.marca = marca;
    this.dataDeFabricacao = new Date(dataDeFabricacao);

    this.getPreco = function() { 
        return _preco;
    }

    this.setPreco = function(valor) {
        if (typeof valor === 'number') {
            _preco = valor;
        } else {
            console.log('Por favor insira um número.')
        }
    }

    this.exibirDetalhes = function() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$${this.getPreco()}`);
        console.log(`Estoque: ${this.estoque}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Data de Fabricação: ${this.dataDeFabricacao.toDateString()}`);
    }

    this.aplicarDesconto = function(porcentagem) {
        const desconto = this.getPreco() * (porcentagem / 100);
        _preco -= desconto;
        console.log(`Novo preço após ${porcentagem}% de desconto: R$${this.getPreco()}`);
    }

    this.verificarDisponibilidade = function() {
        return this.estoque > 0;
    }
}

function Eletronico(nome, preco, estoque, marca, dataDeFabricacao, voltagem, potencia) {
    Produto.call(this, nome, preco, estoque, marca, dataDeFabricacao);
    
    this.voltagem = voltagem;
    this.potencia = potencia;

    const detalhesTecnicos = this.exibirDetalhes;
    this.exibirDetalhes = function() {
        detalhesTecnicos.call(this);
        console.log(`Potência: ${this.potencia}`);
        console.log(`Voltagem: ${this.voltagem}`);
    }
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
eletronico1.exibirDetalhes();
utensilioCozinha.exibirDetalhes();
utensilioCozinha1.exibirDetalhes();

console.log(utensilioCozinha.verificarDisponibilidade());
console.log(utensilioCozinha1.verificarDisponibilidade());