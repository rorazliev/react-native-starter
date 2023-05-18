import React, { FunctionComponent } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { LargeTitle } from '@identity/typography';

const Container = styled.View`
  padding: 88px 0 64px;
`;

const Hero: FunctionComponent = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <LargeTitle textAlign="center">
        Welcome to <LargeTitle color={colors.primary}>React Native</LargeTitle>!
      </LargeTitle>
    </Container>
  );
};

export default Hero;
