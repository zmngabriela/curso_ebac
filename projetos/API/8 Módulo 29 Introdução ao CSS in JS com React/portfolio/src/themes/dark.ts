const temaDark = {
  corPrincipal: '#fff',
  corSecundaria: '#fff',
  corFundo: '#282a35',
  corFundoBotao: '#4476bf',
  corBorda: '#C1C1C1'
};

export default temaDark;

// ERRO NO TEMA props.theme.corFundo dizendo que esse tipo nao existe em DefaultTheme, que e o tipo de tema padrao do styled-components
// temos que dizer ao styled component que esse tipo que estamos usando e do tema que criamos.
// no arquivo do tema (ex.: dark.ts) - adicionar no final a tipagem do tema:
// export type Theme = {
//   corPrincipal: string;
//   corSecundaria: string;
//   corFundo: string;
//   corFundoBotao: string;
//   corBorda: string;
// };
