import styled from 'styled-components/native';

type PropsType = {
  textAlign?: 'center' | 'left' | 'right';
  fontWeight?: number;
  color?: string;
};

export const LargeTitle = styled.Text<PropsType>`
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '700')};
  line-height: 41px;
  font-size: 34px;
`;

export const Title = styled.Text<PropsType>`
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};
  line-height: 28px;
  font-size: 22px;
`;

export const Body = styled.Text<PropsType>`
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  line-height: 22px;
  font-size: 17px;
`;
