$(document).ready(function () {
  const avatar = $(".avatar");
  const nameElement = $(".name");
  const username = $(".username");
  const repositories = $(".repositories");
  const followersNumber = $(".followers");
  const followingNumber = $(".following");
  const link = $(".link");

  fetch("https://api.github.com/users/zmngabriela")
    .then(function (answer) {
      return answer.json();
    })
    .then(function (json) {
      avatar.attr("src", json.avatar_url);
      nameElement.text(json.name);
      username.text(json.login);
      repositories.text(json.public_repos);
      followersNumber.text(json.followers);
      followingNumber.text(json.following);
      link.attr("href", json.html_url);
    })
    .catch(function (error) {
      nameElement.text("An error has occurred. Please try again later.");
    });
});

// CSS IN JS COM REACT

// podemos editar um estilo css no javascript, acessando as propriedades dentro do elemento selecionado do DOM
// isso vai resultar em um estilo inline no DOM, visivel no  Devstool
const titulo = document.querySelector("h1");
titulo.style.color = "red";

// pra fazer CSS in JS, temos a classe CSSStyleSheet()
const css = new CSSStyleSheet();
css.insertRule(
  `
    h2 {
        color: blue;
    }
`,
);

// agora temos que colocar essa sheet no nosso documento
document.adoptedStyleSheets = [css];

// ele vai retornar um codigo css normal, sem ser inline
// as vantagens: mesma sintaxe do SASS, é usado pra Reactive Native e desenvolvimento de mobile apps
