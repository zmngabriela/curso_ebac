"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _console;
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//arguments

function somar(a, b) {
  return a + b;
}
console.log(somar(10, 20));

// se tivesse mais argumentos, podemos ir adicionando, mas nao podemos criar um argumento indefinido
// sempre que usarmos um argumento, temos que passar ele, se nao vai dar erro

// function somar(a, b) {
//     return a + b + d; // erro
// }

// console.log(somar(10, 20, 30));

// No js temos uma palavra chamada arguments, que passa todos os argumentos que foram/vao ser usados na função.

function somar2(a, b, c) {
  console.log(arguments);
}
console.log(somar2(10, 20, 50));

// No terminal vai aparecer [Arguments] {'0’: 10, ‘1’: 20, ‘2’: 30}
// esse tipo de resultado é chamado de dicionário, pois tem a chave e valor.
// o arguments retorna uma estrutura como se fosse um objeto e conseguimos fazer uma interação nela como se fosse um array
// mas esse resultado não é um array. não conseguimos fazer forEach, reduce, map etc.. mas ele é iterável. conseguimos fazer um for nele.

function somar3(a, b) {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}
console.log(somar3(10, 20));

//rest 

// No ES6+ surgiu o rest, que funciona como o arguments mas ele resulta em um array.
/// os 3 pontos significam que isso ta usando o rest, que pode receber inumeros argumentos.
/// com o rest podemos usar qualquer interação de array tipo reduce, forEach, map, filter etc.

function somarComRest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (total, numeroAtual) {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somarComRest(20, 20, 30));

// essa possibilidade é otima mas tem restrições. 
// Não podemos ter 2 argumentos utilizando o rest operator na mesma funcao. 
// O rest operator passado numa funcao tem que ser o ultimo, nao pode ser o primeiro (exemplo function somarComRest(nome, sobrenome, ...numeros) {...

// spread

var numeros = [1, 2, 3, 4];
(_console = console).log.apply(_console, numeros);

//spread tem a mesma aparecencia de um rest ...xxx
// a diferencia e que é usado pra concatenacao, console.log, preenchimento de objetos..
// Rest e pra argumento de funcao.

// outro exemplo:

var timeSP = ['Santos', 'Palmeiras', 'Sao Paulo', 'Bragantino'];
var timeRio = ['Vasco', 'Botafogo', 'Flamengo', 'Fluminense'];

//queremos juntar o conteudo desses dois arrays:

var times = timeSP.concat(timeRio);
console.log(times);

// pra fazer isso tb podemos usar o operador spread:

var carroJulia = {
  modelo: 'Gol',
  marca: 'VW',
  motor: 1.6
};
var carroAna = {
  modelo: 'Gol',
  marca: 'VW',
  motor: 1.8
};

// pra nao termos que repetir todo o codigo se so um atributo muda

// spread

var carroJulia2 = {
  modelo: 'Gol',
  marca: 'VW',
  motor: 1.6
};
var carroAna2 = _objectSpread(_objectSpread({}, carroJulia), {}, {
  motor: 1.8
});
console.log(carroAna2);

// desestruturação em objetos e em arrays:

var motorCarroAna = carroAna.motor;

// com a desestruturação a gente consegue fazer tudo isso em uma atribuição de uma variável:
// Peguei o atributo motor do objeto carro e atribui a uma variável chamada motorCarroXX
// nome da variavel eh motor
var motor = carroAna2.motor;

// Se o carroJulia tb tem motor, poderia dar ruim

// const { motor } = carroJulia;

// com a desestruturação podemos criar alias pra nao ter os mesmos nomes de variáveis
// nome da variael e motorCarroNomexx
var motorCarroAna2 = carroAna2.motor;
var motorCarroJulia = carroJulia.motor;

// Se eu dar um console.log pras duas variáveis novas, no terminal vai aparecer o valor de motor.

console.log(motorCarroAna2);
console.log(motorCarroJulia);

// a desestruturação também pode ser usada em arrays:

var _times = _slicedToArray(times, 3),
  item1 = _times[0],
  item2 = _times[1],
  item3 = _times[2];
console.log(item1);
console.log(item2);
console.log(item3);

// No terminal vai aparecer cada valor da array timesFutebol separados.
// Vai aparecer somente o numero de atributos que colocamos, tipo indice

// também podemos usar o rest aqui pra aparecer todos os atributos

var _times2 = _toArray(times),
  um = _times2[0],
  dois = _times2[1],
  tres = _times2[2],
  outros = _times2.slice(3);
console.log(um);
console.log(dois);
console.log(tres);
console.log(outros); // esse aqui vai aparecer como array, pois sao todos os outros que restaram.