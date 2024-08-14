import styled from 'styled-components';

// IMPORTANDO TIPAGEM DO ARQUIVO INDEX.TSX ('.' pois esta na mesma pasta e o VScode entende onde ta o Props)
import { Props } from '.';

// usamos a tag mais padrao do componente, nesse caso h3 que tem mais nos titulos de nomes de projetos
// passamos a tipagem de styled.h3 como a Props importada
export const Title = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weigth: bold;
  margin-bottom: 16px;
`;
