import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;

const Scrollable = styled.ScrollView`
  padding: 0 32px;
`;

type PropsType = {
  children?: ReactNode;
};

const Layout: FunctionComponent<PropsType> = ({ children }) => (
  <Container>
    <Scrollable>{children}</Scrollable>
  </Container>
);

export default Layout;
