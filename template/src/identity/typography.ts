import styled from 'styled-components/native';

type PropsType = {
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase';
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  textAlign?: 'start' | 'end' | 'center' | 'justify';
  color?: string;
};

export const Body = styled.Text<PropsType>`
  text-transform: ${(props) => props.textTransform ? props.textTransform : 'none'};
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  line-height: 22px;
  font-size: 17px;
`;
