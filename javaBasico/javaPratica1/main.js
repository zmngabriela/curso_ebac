const form = document.getElementsById('form');
const campoA = document.getElementById('campoA'); 
const campoB = document.getElementById('campoB');
const validMessage = document.getElementsById('valid');
const invalidMessage = document.getElementsById('invalid');


function validacao(numero1, numero2) {
    numero2 > numero1
    return true
}

form.addEventListener('submit', function (e) {
    let formEValido = false;
    e.preventDefault();
    formEValido = validacao(campoA, campoB);

    if (formEValido) {
        validMessage.style.display = 'flex';
        invalidMessage.style.display = 'none';
        campoA.value = ' ';
        campoB.value = ' ';
    } else {
        invalidMessage.style.display = 'flex';
        validMessage.style.display = 'none';
    }
});
