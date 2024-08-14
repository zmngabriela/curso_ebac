// CRIANDO COMPONENTE TITULO PRA SIDE BAR

// VALOR DINAMICO CHILDREN
// queremos usar o valor que ta dentro da tag title no sidebar (elemento filho desse aqui (que e um componente pra formar o side bar)
// nesse caso nao podemos usar qualquer valor de propriedade pro props
// temos que usar o nome CHILDREN (elemento filho)
// no caso o componente foi criado aqui
// mas ele ta sendo usado no sidebar container (que e uma juncao de componentes)
// entao esse é o pai e o sidebar e o filho
// Nesse caso, estamos pegando o valor que for colocado no pai, dentro de title, pra ser o valor dentro do span
// usando o props que liga tudo :)
// pq dai dependendo qual container usa o title, ele vai ta com o valor de cada pagina, dinamico

import { Title as TitleStyle } from './styles';

// CRIANDO TIPAGEM das propriedades
export type Props = {
  children: string;
  fontSize: number;
};

// CRIANDO COMPONENTE passando props como Props (tipagem, pra poder usar as propriedades dentro do componente ja tipados)
const Title = (props: Props) => {
  return <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>;
  // IMPORTANDO ARQUIVO ESTILO - criamos o arquivo estilo, que tambem se expota como title, mas entao renomeamos Title as TitleStyle, pra nao ter conflito.
  // colocamos a tag com o alias dentro do return do componente, ai ele fica com o estilo aplicado
  // nao esquecer de passar a propriedade obrigatoria (fontSize), que nao tem ponto interrogacao, em todos os titles dos containers filhos.
};

export default Title;
