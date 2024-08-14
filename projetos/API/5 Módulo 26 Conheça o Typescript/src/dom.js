"use strict";
// estamos trabalhando com um form no html
const campoNome = document.getElementById('nome');
// tipo HTMLElement or null
const form = document.getElementsByTagName('form');
// tipo HTMLCollectionOf<HTMLElement>
const button = document.getElementById('button');
// tipo HTMLElement or null
button === null || button === void 0 ? void 0 : button.addEventListener('click', (e) => {
    // quando confirmamos a escrita aparece o ? automaticamente, pq ele pode ser null
    // click event e considerado do tipo TS MouseEvent
});
button === null || button === void 0 ? void 0 : button.addEventListener('click', (e) => {
    // tb temos esse evento passa o mouse no evento e clica f12
});
