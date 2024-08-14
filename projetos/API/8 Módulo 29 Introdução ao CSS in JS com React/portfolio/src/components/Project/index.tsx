import Title from '../Title';
import Paragraph from '../Paragraph';
import styled from 'styled-components';
import { LinkBotao } from './styles';

// STYLED COMPONENTS
// podemos usar o componente stilizado no arquivo do componente
// nao e muito legal, mas se for usar, deve ficar antes do cod do componente, como ta aqui
const Card = styled.div`
  border: 1px solid #c1c1c1;
  padding: 16px;
`;

const Project = () => {
  return (
    <Card>
      <Title fontSize={16}>Projeto Lista de tarefas</Title>
      <Paragraph type="secondary">Lista de tarefas feita com VueJS</Paragraph>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  );
};

export default Project;
