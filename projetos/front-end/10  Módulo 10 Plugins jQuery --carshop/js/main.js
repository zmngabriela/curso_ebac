$(document).ready(function(){
    $('.image-slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        swipeToSlide: true,
        pauseOnHover: true,
    });

    $('.menuBurger').click(function() {
        $('nav').slideToggle();
    });

    let maskVar = ($('select').val() === 'Telefone') ? '(00) 0000-0000' : '(00) 00000-0000';
    $('#phone').mask(maskVar);

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
            mensagem: {
                required: true
            }
        },
        messages: {
            name: 'Por favor, insira o seu nome',
            phone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira o seu email'
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
    })

    $('.car-list button').click(function() {
        const destiny = $('#contact')

        const nameCar = $(this).parent().find('h3').text();
        $('#interest').val(nameCar);
        $('html').animate({
            scrollTop: destiny.offset().top
        }, 1000)
    })
});
