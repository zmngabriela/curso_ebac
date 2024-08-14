import { P } from './styles';

export type Props = {
  children: string;
  type?: 'principal' | 'secondary';
  fontSize?: number;
};
/* a propriedade type esta tipada como 'principal' ou 'secondary. entao se colocar qqr coisa coisa vai dar erro' */

// desestruturando o props em variantes com nome das propriedades, e ja dando um valor padrao pra type = 'principal
const Paragraph = ({ children, type = 'principal', fontSize }: Props) => {
  return (
    <P type={type} fontSize={fontSize}>
      {children}
    </P>
  );
}; // type={type}, pq type vai ser dado em cada props nos containers filhos

export default Paragraph;
