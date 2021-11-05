import TimerComponent from '.';

import Timer, { TimerType, StatusType } from '@shared/models/Timer';

import { screen, render } from '@infra/test-utils';

const timers: Timer[] = [
  {
    name: 'pomodoro',
    secondsElapsed: 0,
    status: StatusType.Idle,
    timerType: TimerType.Pomodoro,
    totalSeconds: 60 * 25,
  }
];

describe('<Timer />', () => {
  it('should render component', () => {
    render(<TimerComponent timers={timers} type={TimerType.Pomodoro} />);

    const timer = screen.getByText('25:00');

    expect(timer).toBeInTheDocument();
  });
});