import styled from 'styled-components';

export const LinkBotao = styled.a`
  background-color: ${(props) => props.theme.corFundoBotao};
  color: ${(props) => props.theme.corFundo};
  font-size: 14px;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`;
