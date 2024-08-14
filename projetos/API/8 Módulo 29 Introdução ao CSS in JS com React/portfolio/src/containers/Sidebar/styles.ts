import styled from 'styled-components';
import { P } from '../../components/Paragraph/styles';

// USAR A TAG DE STYLED COMPONENT como tag pra outro styled component
export const Descricao = styled(P)`
  margin-bottom: 40px;
`;

export const BotaoTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  border-radius: 12px;
  color: ${(props) => props.theme.corFundo};
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`;
