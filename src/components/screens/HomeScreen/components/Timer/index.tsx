import styled from 'styled-components';

import ActionButton from './components/ActionButton';
import AnimatedRing from './components/AnimatedRing';

import Box from '@components/foundation/Box';
import Text from '@components/foundation/Text';

import useCountdown from '@shared/hooks/useCountdown';
import Timer, { TimerType } from '@shared/models/Timer';

const StyledTimer = styled(Box)`
  border-radius: 100%;

  background: linear-gradient(315deg, #2E325A 0%, #0E112A 100%);
  box-shadow: -50px -50px 100px #272C5A, 50px 50px 100px #121530;

  max-width: 300px;
  max-height: 300px;

  .inner-circle {
    border-radius: 100%;

    background: #161932;

    max-width: 267.8px;
    max-height: 267.8px;

    position: relative;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 410px;
    max-height: 410px;
    
    .inner-circle {
      max-width: 366px;
      max-height: 366px;
    }
  }
`;

const Content = styled(Box)`
  position: absolute;
  top: 0;
  z-index: 3;
  
  h1 {
    margin-bottom: 19px;
  }
`;

interface TimerProps extends React.ComponentProps<'div'> {
  timers: Timer[];
  type: TimerType; 
}

export default function TimerComponent({ timers, type, ...rest }: TimerProps): JSX.Element {
  const { timer, setTimerStatus, display } = useCountdown(timers, type);

  return (
    <StyledTimer {...rest}>
      <Box className="inner-circle">
        
        <AnimatedRing elapsed={timer.secondsElapsed} total={timer.totalSeconds} />

        <Content flexDirection="column">
          <Text as="h1" variant="heading1" color="gray.main">
            {display}
          </Text>

          <ActionButton status={timer.status} onStatusChange={setTimerStatus} />
        </Content>
      </Box>
    </StyledTimer>
  );
}
