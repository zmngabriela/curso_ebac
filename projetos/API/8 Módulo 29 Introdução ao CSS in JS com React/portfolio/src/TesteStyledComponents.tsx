// USANDO O STYLED COMPONENTS

import styled from 'styled-components';

// TIPAGEM DE PROPS PRA DEFINIR OS TIPOS DE CADA PROPS
// O ? e pra dizer que nao e obrigatorio, se nao se o componente nao tiver prop vai dar erro
type BotaoProps = {
  principal: boolean;
  fontSize?: string;
};

// CRIANDO COMPONENTE STYLED COMPONENTS
// o styled. da acesso a atributos html no js
// o <BotaoProps> e o tipo desse componente.
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`; // esses valores sao condicionais, baseado nas props

// Criando um componente de outro componente
// assim como a heranca do OOP - styled(Botao)
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`; // podemos usar essa sintaxe parecida com SASS

// aqui passamos a funcao do componente teste
function Teste() {
  return (
    <>
      {/* retornamos os styled components assim como se fossem componentes mesmo, com props etc */}
      <Botao principal>Enviar</Botao>
      <Botao principal={false} fontSize="14px">
        Click aqui.
      </Botao>
      <BotaoPerigo principal as="a">
        <span>Nao clique aqui.</span>
      </BotaoPerigo>
      {/* o as="" transforma esse elemento em outra tag de html. por exemplo as="a" retorna o <a href> como se fosse o botao*/}
    </>
  );
}

export default Teste;
