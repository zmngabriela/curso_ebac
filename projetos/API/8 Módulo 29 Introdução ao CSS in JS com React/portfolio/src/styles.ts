// ADICIONANDO ESTILO GLOBAL ETC COM STYLED COMPONENTS
// o nome styles.ts pode ser js ou ts em caso de typescript

// o styled fica fora das chaves pois estamos importando o styled. , que é o export default de styled components (como se fosse o styled do plugin)
// se for createGlobalStyle ou importando o resultado de export const, entra nas chaves, pois estamos importando de algo a parte ou criado
import styled, { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border-box: box-sizing;
    font-family: "Inter", sans-serif;
    list-style: none;

  body {
    padding: 80px 0;

    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }
}
`;

export default EstiloGlobal;

// quando o styled component é de export const, e é importado em outro arquivo, tem que colocar dentro das chaves. exemplo import Container from './xx'
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;

    .github-images {
      width: 100%;
    }
  }
`;
