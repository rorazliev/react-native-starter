import React, { FunctionComponent } from 'react';
import { Platform } from 'react-native';
import Hero from '@components/Hero';
import Layout from '@components/Layout';
import Section from '@components/Section';
import { Body } from '@identity/typography';

const HomeScreen: FunctionComponent = () => {
  const isIOS = Platform.OS === 'ios';

  return (
    <Layout>
      <Hero />
      <Section title="Step One">
        <Body>
          Edit <Body fontWeight={600}>src/screens/Home.ts</Body> to change this{' '}
          screen and then come back to see your edits.
        </Body>
      </Section>
      <Section title="See Your Changes">
        <Body>
          Press <Body fontWeight={600}>{isIOS && 'Cmd + '}R</Body> in the{' '}
          simulator to reload your app's code.
        </Body>
      </Section>
      <Section title="Debug">
        <Body>
          Press <Body fontWeight={600}>{isIOS ? 'Cmd + D' : 'Ctrl + M'}</Body>{' '}
          in the simulator or <Body fontWeight={600}>Shake</Body> your device to{' '}
          open the React Native debug menu.
        </Body>
      </Section>
      <Section title="Learn More">
        <Body>Read the docs to discover what to do next.</Body>
      </Section>
    </Layout>
  );
};

export default HomeScreen;
