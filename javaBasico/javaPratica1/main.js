const form = document.getElementById('form');
const campoA = document.getElementById('campoA'); 
const campoB = document.getElementById('campoB');
const validMessage = document.getElementById('valid');
const invalidMessage = document.getElementById('invalid');


function validacao(numero1, numero2) {
    return numero2 > numero1
}

form.addEventListener('submit', function (e) {
    let formEValido = false;
    e.preventDefault();
    formEValido = validacao(campoA.value, campoB.value);

    if (formEValido) {
        validMessage.style.display = 'flex';
        invalidMessage.style.display = 'none';
        campoA.value = ' ';
        campoB.value = ' ';
    } else {
        invalidMessage.style.display = 'flex';
        validMessage.style.display = 'none';
        campoA.value = ' ';
        campoB.value = ' ';
    }
});

campoA.addEventListener('input', function () {
    validMessage.style.display = 'none';
    invalidMessage.style.display = 'none';
})

