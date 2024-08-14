"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Object Oriented Programming

// antes do ES6+ o js a programacao orientada a objetos era feita atravez de funcoes construtoras

function Pokemon(nomePokemon, tipoPokemon) {
  // os parametros podem ser os mesmos nomes das chaves do objeto
  this.nome = nomePokemon, this.tipo = tipoPokemon;
}
var pikachu = new Pokemon('Pikachu', 'Eletrico');
console.log(pikachu);

// com o ES6+ foi introduzido a classe no js
var Pokemon1 = /*#__PURE__*/_createClass(function Pokemon1() {
  _classCallCheck(this, Pokemon1);
  _defineProperty(this, "nome", '');
  _defineProperty(this, "tipo", '');
});
var eve = new Pokemon1();

// podemos passar os valores assim:
eve.nome = 'Eve';
eve.tipo = 'Ar';
console.log(eve);

// tb podemos passar os valores como parametros, mas dentro da classe temos que criar uma funcao constructor
var _hp = /*#__PURE__*/new WeakMap();
var Pokemon2 = /*#__PURE__*/function () {
  // encapsulamento (criando campo privado)

  function Pokemon2(nome, tipo) {
    _classCallCheck(this, Pokemon2);
    // nome = ''; // nao precisamos usar isso se usamor o construtor
    // tipo = '';

    _classPrivateFieldInitSpec(this, _hp, 100);
    this.nome = nome, this.tipo = tipo;
  }

  // outra mudanca que tivemos foi nos metodos - funcao dentro das classes 
  return _createClass(Pokemon2, [{
    key: "atacar",
    value: function atacar(nomeAtaque) {
      console.log("".concat(this.nome, " atacou com ").concat(nomeAtaque, "."));
    }

    // encapsulamento, que e a capacidade de tornas alguns metodos e funcoes privadas, acessiveis dentro da classe
  }, {
    key: "recebeuAtaque",
    value: function recebeuAtaque() {
      _classPrivateFieldSet(_hp, this, _classPrivateFieldGet(_hp, this) - 10);
      console.log("".concat(this.nome, " recebeu um ataque. -10 HP"));
    }

    // pra voltar a acessar o charmander.hp privado:
  }, {
    key: "exibeHP",
    value: function exibeHP() {
      console.log(_classPrivateFieldGet(_hp, this));
    }
  }]);
}();
var bulbassauro = new Pokemon2('Bulbassauro', 'Agua');
bulbassauro.atacar('squiiiiirt');
console.log(bulbassauro);

// heranca (uma classe pode ser herdeira de outra)
// o pikachu nesse caso tb e uma classe pois pode ter pikachu do ash e de outros hunters
var Charmander = /*#__PURE__*/function (_Pokemon3) {
  // tb podemos ja passar um valor aqui dentro pra nao ficar passando em todas as instancias
  function Charmander() {
    _classCallCheck(this, Charmander);
    // chamar o construtor da classe mae/superior
    return _callSuper(this, Charmander, ['Charmander', 'Fogo']);
  }

  // polimorfismo, que e a capacidade de fazer uma tarefa de varias formas
  // por exemplo a funcao atacar, ja que varios pokemons podem atacar e da pra usar isso em outras classes
  _inherits(Charmander, _Pokemon3);
  return _createClass(Charmander, [{
    key: "atacar",
    value: function atacar() {
      // com ou sem o construtor na classe filha, podemos usar o this assim como na classe mae
      console.log("".concat(this.nome, " atacou com Rojao. HP +20"));
    }
  }]);
}(Pokemon2);
var charmander = new Charmander();
console.log(charmander);

// quando fazemos a heranca, as instancias da classe filha tb sao as mesmas da classe mae
console.log(charmander instanceof Charmander); // true
console.log(charmander instanceof Pokemon2); // true

charmander.recebeuAtaque();
console.log("HP: ".concat(charmander.hp));
charmander.atacar();
console.log("HP: ".concat(charmander.hp));

// encapsulamento: como esse valor de hp e publico, da pra ser alteravel facilmente

charmander.hp = 5000;
console.log(charmander.hp);
charmander.exibeHP();

// aqui entra uma versao mais recente do ES que e criar campos privados:
// esse metodo usa # na frente de atributos

// agora depois disso, se eu tento usar chamander.hp - o hp nem aparece mais no vscode
// se a gente faz charmander.hp = 5000; ele ate funciona mas nao vai mais alterar o valor do hp da classe
// ele vai criar um novo atributo publico chamado hp