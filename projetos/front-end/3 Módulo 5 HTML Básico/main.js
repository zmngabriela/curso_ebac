/* quando vc preenche o form e submit, a pagina atualiza e os campos ficam em branco. pra remover esse comportamento, temos q selecionar o form e alterar o evento de submissao do form, adicionando um parametro na funcao do addEventListener que invoca uma funcao sempre que tiver o evento selectionado*/
/*e tb programando pra function somente aceitar nome completo*/

const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');


function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();  /* e=event */ 

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b>, conta: <b>${numeroContaBeneficiario.value}</b>`;
    
    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

/*quando vc da submit, o aviso que foi mostrado de successMessage ou .error-message nao somem pra vc fazer um novo submit, pra isso, fazer:*/
nomeBeneficiario.addEventListener('keyup', function(e) { /*keyup é a açao pra ja pegar o valor do input no momento que esta sendo adicionado, sem esperar o user sair do input*/ 
    console.log(e.target.value); /* acessando o target e value do dado (da pra ver no console)*/
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})

/*quando vc da o submit a successMessage ainda fica ali, vou tentar fazer sumir:*/

nomeBeneficiario.addEventListener('input', function(e) {
    nomeBeneficiario.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
    document.querySelector('.success-message').style.display = 'none';
})
