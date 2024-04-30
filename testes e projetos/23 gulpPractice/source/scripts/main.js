// import styles from './source/script/variantes.scss';

document.addEventListener('DOMContentLoaded', function() {
    const buttonClick = document.querySelector('button');

    buttonClick.addEventListener('click', function() {
        buttonClick.style.backgroundColor = '#ff009d'/*styles.corTerciaria*/;
    });
});

// eu tentei usar o import './source/scripts/variantes.scss';
// pra usar as cores do variantes.scss (la eu usei o export)
// isso seria usando tambem os pacotes "style-loader","css-loader","sass-loader"
// as cores funcionam normal no main.css, mas no js nao consigo importar
// no dev tools do chrome diz Uncaught SyntaxError: Cannot use import statement outside a module (at main.js:1:1) relativo ao import styles from "./source/script/variantes.scss";
// depois de perder meio dia so vendo foruns online e nao conseguir resolver,  to mandando assim pois acho que ja resolve a pratica :)