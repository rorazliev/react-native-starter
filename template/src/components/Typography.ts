import styled from 'styled-components/native';
import { FONT_FAMILY } from '@app/constants';

type Props = {
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase';
  textAlign?: 'start' | 'end' | 'center' | 'justify';
  color?: string;
};

export const BodyLarge = styled.Text<Props>`
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : 'none'};
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-family: ${FONT_FAMILY}-Regular;
  letter-spacing: 0.5px;
  line-height: 24px;
  font-size: 16px;
`;

export const BodyMedium = styled.Text<Props>`
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : 'none'};
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-family: ${FONT_FAMILY}-Regular;
  letter-spacing: 0.25px;
  line-height: 20px;
  font-size: 14px;
`;

export const BodySmall = styled.Text<Props>`
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : 'none'};
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-family: ${FONT_FAMILY}-Regular;
  letter-spacing: 0.4px;
  line-height: 16px;
  font-size: 12px;
`;

export const LabelLarge = styled.Text<Props>`
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : 'none'};
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-family: ${FONT_FAMILY}-Medium;
  letter-spacing: 0.1px;
  line-height: 20px;
  font-size: 14px;
`;

export const LabelMedium = styled.Text<Props>`
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : 'none'};
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-family: ${FONT_FAMILY}-Medium;
  letter-spacing: 0.5px;
  line-height: 16px;
  font-size: 12px;
`;

export const LabelSmall = styled.Text<Props>`
  text-transform: ${(props) =>
    props.textTransform ? props.textTransform : 'none'};
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-family: ${FONT_FAMILY}-Medium;
  letter-spacing: 0.5px;
  line-height: 16px;
  font-size: 11px;
`;
