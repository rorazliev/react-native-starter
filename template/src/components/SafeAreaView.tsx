import React, { type FunctionComponent, type ReactNode } from 'react';
import styled from 'styled-components/native';

const OuterContainer = styled.SafeAreaView`
  flex: 1;
`;

const InnerContainer = styled.View`
  position: relative;
  flex: 1;
`;

type Props = {
  children?: ReactNode;
};

export const SafeAreaView: FunctionComponent<Props> = ({ children }) => (
  <OuterContainer>
    <InnerContainer>{children}</InnerContainer>
  </OuterContainer>
);
