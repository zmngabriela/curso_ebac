"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// o map e uma estrutura tipo um dicionario
// e um conjunto de valoes. esses valores sao como objetos
// temos chave e valor

var meuMap = new Map();
meuMap.set('nome', 'gian');
meuMap.set('stack', 'html, css, js');
// com o set, damos dados pro map

console.log(meuMap);

// pra recuperar um valor no map:

var nome = meuMap.get('nome');
console.log(nome);

// pra recuperar a quantidade de items dentro do map:

meuMap.size;
console.log(meuMap.size);

// pra identificar se uma chave existe dentro do map:

meuMap.has('nome');
console.log(meuMap.has('nome'));

// pra remover todos os items no map:

// meuMap.clear();

// console.log(meuMap.size);

// pra fazer uma iteracao com o for dentro do map:
var _iterator = _createForOfIteratorHelper(meuMap.keys()),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var chave = _step.value;
    console.log(chave);
  }

  // pra recuperar os valores: 
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(meuMap.values()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var valor = _step2.value;
    console.log(valor);
  }

  // fizemos o for pelas entradas que tem no map
  // oq e entrada? sao os items compostos por chave e valor

  // pra recuperar as entradas inteiras:
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var _iterator3 = _createForOfIteratorHelper(meuMap.entries()),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var entrada = _step3.value;
    console.log(entrada);
  } // vai entregar chaves em um array, e valores em outro array

  // pra fazer a desestruturacao da array com chave e value na ordem:
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
var _iterator4 = _createForOfIteratorHelper(meuMap.entries()),
  _step4;
try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var _step4$value = _slicedToArray(_step4.value, 2),
      _chave = _step4$value[0],
      _valor = _step4$value[1];
    console.log("".concat(_chave, ": ").concat(_valor));
  }

  // pra deletar uma chave de um map:
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}
meuMap.delete('stack');
console.log(meuMap);

// set

// e uma estrura mais rigida, nao tem chave e valor
// e os valores nao se podem repetir

var cpfs = new Set();
cpfs.add('0195737043');
cpfs.add('1195737043');
cpfs.add('2195737043');
console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());
// isso retorna a mesma coisa, pois a chave e value e a mesma

// todas as outras funcoes do map tambem estao disponiveis no set

// tb podemos interar no set e map atraves do forEach:

cpfs.forEach(function (valor) {
  console.log(valor);
});

// criar uma listagem de itens unicos e deletar itens repetidos:
// nesse caso tenho uma array com itens repetidos
var array = ['Gian Souza', 'Gabriela Zimmermann', 'Leonardo Cadore', 'Gian Souza', 'Gabriela Zimmermann'];

// primeiro convertemos o array pra set:

var arraySet = new Set([].concat(array));

// o proprio set ja deleta os valores duplicados**
console.log(arraySet);

// pra converter um set pra um array:

var arraySemDuplicados = _toConsumableArray(arraySet);
console.log(arraySemDuplicados);

// como diferenciar um set de um array? os array ficam dentro de colchetes e o set diz set na frente e fica dentro de chaves