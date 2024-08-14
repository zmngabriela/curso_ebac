// REQUISIÇOES AJAX / FETCH / XMLHttpRequest
// 
// Old school way of creating an API request:
//
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('buscar-cep').addEventListener('click', function() {
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endPoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endPoint);
//         xhttp.send();
//     })
// }) 

// Request with jQuery

$(document).ready(function() {
    $('#cep').mask('00000-000');
    
    $('#buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endPoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);

        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        // $.ajax(endPoint).done(function(resposta) {
        //     const rua = resposta.logradouro;
        //     const bairro = resposta.bairro;
        //     const cidade = resposta.localidade;
        //     const estado = resposta.uf;
        //     const endereco = `${rua}, ${bairro} - ${cidade} - ${estado}`;
        //     $('#endereco').val(endereco);

        //     setTimeout(function() {
        //         $(botao).find('i').removeClass('d-none');
        //         $(botao).find('span').addClass('d-none');
        //     }, 1000);
        // }) se for sem fetch


        // Request with fetch
        fetch(endPoint).then(function(resposta) {
            return resposta.json();
        })
            .then(function(json) {
                const rua = json.logradouro;
                const bairro = json.bairro;
                const cidade = json.localidade;
                const estado = json.uf;
                const endereco = `${rua}, ${bairro} - ${cidade} - ${estado}`;
                $('#endereco').val(endereco);
            })
            .catch(function(error) {
                alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.")
            })
            .finally(function() {
                setTimeout(function() {
                    $(botao).find('i').removeClass('d-none');
                    $(botao).find('span').addClass('d-none');
                }, 1000);
            })
        })

        // Creating exceptions
        $('#form-request').submit(function(e) {
            e.preventDefault();

            if ($('#name').val().length == 0) {
                throw new Error('Digite o nome.');
            }
        })
    })