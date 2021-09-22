import { ThemeProvider } from 'styled-components';

import SEO from '@components/common/SEO';
import HomeScreen from '@components/screens/HomeScreen';

import GlobalStyle from '@theme/GlobalStyle';
import theme from '@theme/index';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO title="Pomodoro App" description="Pomodoro App made with Next.js" />
      <HomeScreen />
    </ThemeProvider>
  );
}
