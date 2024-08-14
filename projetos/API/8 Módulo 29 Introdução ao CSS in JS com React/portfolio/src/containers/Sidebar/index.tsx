// CRIANDO CONTAINER SIDEBAR

import Title from '../../components/Title';
import Avatar from '../../components/Avatar';
import Paragraph from '../../components/Paragraph';
import { BotaoTema, Descricao, SidebarContainer } from './styles';

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Gabriela Zimmermann</Title>
        <Paragraph type="secondary" fontSize={16}>
          zmngabriela
        </Paragraph>
        <Descricao type="principal" fontSize={12}>
          Engenheira front-end
        </Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  );
};

export default Sidebar;
