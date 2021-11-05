
import SEO from '@components/common/SEO';
import HomeScreen from '@components/screens/HomeScreen';

import { ThemeProvider } from '@shared/contexts/ThemeProvider';
import { TimersProvider } from '@shared/contexts/TimersProvider';

import GlobalStyle from '@theme/GlobalStyle';

export default function Home(): JSX.Element {
  return (
    <ThemeProvider>
      <TimersProvider>
        <GlobalStyle />
        <SEO title="Pomodoro App" description="Pomodoro App made with Next.js" />
        <HomeScreen />
      </TimersProvider>
    </ThemeProvider>
  );
}
