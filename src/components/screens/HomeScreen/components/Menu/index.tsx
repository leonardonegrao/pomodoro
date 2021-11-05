import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import Box from '@components/foundation/Box';
import Text from '@components/foundation/Text';

import Timer, { TimerType } from '@shared/models/Timer';

interface MenuItemProps extends React.ComponentPropsWithoutRef<'div'> {
  isActive: boolean;
}

const StyledMenuItem = styled.div<MenuItemProps>`
  height: 48px;
  width: 106px;
  border-radius: 26.5px;

  background: ${({ theme, isActive }) => (
    isActive ? theme.colors.secondary[theme.activeTheme.color] : 'transparent'
  )};

  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 120px; 
  }
`;

export function MenuItem({ isActive, children, ...rest }: MenuItemProps): JSX.Element {
  return (
    <StyledMenuItem isActive={isActive} {...rest}>
      <Box>
        {children}
      </Box>
    </StyledMenuItem>
  );
}

const StyledMenu = styled.div`
  padding: 6px 8px;
  border-radius: 31.5px;

  background: ${({ theme }) => theme.colors.primary.dark};

  z-index: 1;
`;

interface MenuProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  timers: Timer[];
  activeTimerType: TimerType;
  onSelect: Dispatch<SetStateAction<TimerType>>,
}

export default function Menu({ timers, activeTimerType, onSelect, ...rest}: MenuProps): JSX.Element {
  return (
    <StyledMenu {...rest}>
      <Box as="menu" role="menu">
        {timers.map((timer) => (
          <MenuItem
            isActive={activeTimerType === timer.timerType}
            key={timer.timerType}
            onClick={() => onSelect(timer.timerType)}
          >
            <Text
              as="span"
              color={activeTimerType === timer.timerType ? 'primary.main' : 'gray.main'}
              options={activeTimerType === timer.timerType ? {} : { opacity: 0.4 }}
              variant="body2"
            >
              {timer.name}
            </Text>
          </MenuItem>
        ))}
      </Box>
    </StyledMenu>
  );
}
