$(document).ready(function() {
    $('.menuBurger').click(function() {
        $('nav').slideToggle();
    });

    $('#phone').mask('(00)00000-0000', {
        placeholder: '(00)00000-0000'
    })

    $('#doc').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#cep').mask('00-000-000', {
        placeholder: '00-000-000'
    })

    /*quando preencho os campos, ele nao chega a terminar e zera de novo.
    outra coisa é que quando preencho, o número fica com virgula, e nao ponto*/

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            doc: {
                required: true
            },
            address: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            name: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira o seu email.',
            phone: 'Por favor, insira o seu telefone com DDD.',
            doc: 'Por favor, insira o seu CPF.',
            address: 'Por favor, insira o seu endereço completo.',
            cep: 'Por favor, insira o seu cep. Exemplo: 80-110-456.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let incorrect = validador.numberOfInvalids()
            if (incorrect) {
                alert('Por favor revise os seus dados de contato.');
            }
        }
        /*showErrors: function (errorMap, errorList) {
            this.defaultShowErrors();
            $.each(errorList, function (i, error) {
                $(error.element).next('label.error').css("display", "block");
            });
        } queria o estilo em inline pro label + input, mas quando vem a menssagem de validação
        ela fica inline tambem, ai desconfigura. selecionei label.error, mas como
        o elemento pai já ta em display: flex, nao to conseguindo mudar somente o label pra block*/
    })
})