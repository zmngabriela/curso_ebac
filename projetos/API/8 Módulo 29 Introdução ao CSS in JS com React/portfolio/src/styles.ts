// ADICIONANDO ESTILO GLOBAL COM STYLED COMPONENTS
// o nome styles.ts pode ser js ou ts em caso de typescript

import { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border-box: box-sizing;
}
`;

export default EstiloGlobal;
