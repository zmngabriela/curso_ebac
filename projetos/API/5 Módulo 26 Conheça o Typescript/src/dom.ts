// estamos trabalhando com um form no html

const campoNome = document.getElementById('nome');
// tipo HTMLElement or null

const form = document.getElementsByTagName('form');
// tipo HTMLCollectionOf<HTMLElement>

const button = document.getElementById('button');
// tipo HTMLElement or null

button?.addEventListener('click', (e: MouseEvent) => {
    // quando confirmamos a escrita aparece o ? automaticamente, pq ele pode ser null
    // click event e considerado do tipo TS MouseEvent
})

button?.addEventListener('click', (e: KeyboardEvent) => {
    // tb temos esse evento passa o mouse no evento e clica f12
})