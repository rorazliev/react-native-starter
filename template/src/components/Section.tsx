import { Title } from '@identity/typography';
import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: column;
  padding: 24px 0;
  display: flex;
`;

const Content = styled.View`
  padding-top: 16px;
`;

type PropsType = {
  title: string;
  children?: ReactNode;
};

const Section: FunctionComponent<PropsType> = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Container>
);

export default Section;
