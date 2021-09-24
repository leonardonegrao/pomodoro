import styled from 'styled-components';

import AppIcon from '@components/common/AppIcon';
import Text from '@components/foundation/Text';

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.primary.main};
`;

const HomeContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 100%;
`;

export default function HomeScreen() {
  return (
    <HomeWrapper>
      <HomeContent>
        <Text variant="appTitle" tag="h1" color="white">pomodoro</Text>

        <Text variant="heading3" tag="h3" color="white">pomodoro</Text>

        <div>Clock</div>

        <AppIcon icon="settings" />
      </HomeContent>
    </HomeWrapper>
  );
}
