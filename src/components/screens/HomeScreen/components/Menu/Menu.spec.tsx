import user from '@testing-library/user-event';

import Menu from './index';

import Timer, { StatusType, TimerType } from '@shared/models/Timer';

import { screen, render } from '@infra/test-utils';

const timers: Timer[] = [
  {
    name: 'pomodoro',
    secondsElapsed: 0,
    status: StatusType.Idle,
    timerType: TimerType.Pomodoro,
    totalSeconds: 60 * 25,
  },
  {
    name: 'short break',
    secondsElapsed: 0,
    status: StatusType.Idle,
    timerType: TimerType.ShortBreak,
    totalSeconds: 60 * 5,
  },
];

describe('<Menu />', () => {
  it('should render component', () => {
    const activeTimerType = TimerType.Pomodoro;
    render(<Menu timers={timers} activeTimerType={activeTimerType} onSelect={() => {}} />);
    
    const menu = screen.getByRole('menu');

    expect(menu).toBeInTheDocument();
  });

  it('should change active MenuItem on click', () => {
    const activeTimerType = TimerType.Pomodoro;
    const onSelect = jest.fn();
    render(<Menu timers={timers} activeTimerType={activeTimerType} onSelect={onSelect} />);

    const shortBreakMenuItem = screen.getByText('short break');
    user.click(shortBreakMenuItem);

    expect(onSelect).toHaveBeenCalledWith(TimerType.ShortBreak);
  });
});
