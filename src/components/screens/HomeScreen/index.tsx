import { useState } from 'react';
import styled from 'styled-components';

import Menu from './components/Menu';
import SettingsModal from './components/SettingsModal';
import Timer from './components/Timer';

import AppIcon from '@components/common/AppIcon';
import Logo from '@components/common/Logo';
import Box from '@components/foundation/Box';

import { useTimers } from '@shared/contexts/TimersProvider';
import { TimerType } from '@shared/models/Timer';

const StyledHome = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.primary.main};
`;

export default function HomeScreen(): JSX.Element {
  const [timers, setTimers] = useTimers();
  const [timerType, setTimerType] = useState<TimerType>(TimerType.Pomodoro);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  function handleModalToggle() {
    setIsSettingsModalOpen((previousValue) => !previousValue);
  }

  return (
    <StyledHome>
      <Box as="main" flexDirection="column" justifyContent="space-around">
        <Logo />

        <Menu timers={timers} activeTimerType={timerType} onSelect={setTimerType} />
        <Timer timers={timers} type={timerType} />

        <button title="Open Settings" onClick={handleModalToggle}>
          <AppIcon icon="settings" fillOpacity=".4" />
        </button>
      </Box>

      {isSettingsModalOpen && (
        <SettingsModal
          timers={timers}
          onTimersChange={setTimers}
          onClose={handleModalToggle}
        />
      )}
    </StyledHome>
  );
}
