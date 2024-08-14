$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const newImage = $('#newImage').val();
        const newItem = $('<li style="display: none"></li>');
        $(`<img src="${newImage}" />`).appendTo(newItem);
        $(`<div class="overlay-img">
            <a hre="${newImage}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>`).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#newImage').val('');
    })
})