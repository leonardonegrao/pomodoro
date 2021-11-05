import user from '@testing-library/user-event';

import SettingsModal from '.';

import { Colors } from '@shared/models/Colors';
import { Fonts } from '@shared/models/Fonts';
import Timer, { StatusType, TimerType } from '@shared/models/Timer';

import { screen, render } from '@infra/test-utils';

describe('<SettingsModal />', () => {
  it('should render component', () => {    
    render(<SettingsModal timers={[]} onClose={() => {}} onTimersChange={() => {}} />);

    const settingsModal = screen.getByRole('dialog');

    expect(settingsModal).toBeInTheDocument();
  });

  it('should call onClose', () => {
    const onClose = jest.fn();
    
    render(<SettingsModal timers={[]} onClose={onClose} onTimersChange={() => {}} />);

    const closeModal = screen.getByTitle('Close settings');
    user.click(closeModal);

    expect(onClose).toHaveBeenCalled();
  });

  it('should be able to update theme font', () => {
    render(<SettingsModal timers={[]} onClose={() => {}} onTimersChange={() => {}} />);

    const fontOption = screen.getByDisplayValue(Fonts.Mono);
    user.click(fontOption);

    expect(fontOption).toBeChecked();
  });

  it('should be able to update theme color', () => {
    render(<SettingsModal timers={[]} onClose={() => {}} onTimersChange={() => {}} />);

    const colorOption = screen.getByDisplayValue(Colors.Purple);
    user.click(colorOption);

    expect(colorOption).toBeChecked();
  });

  it('should be able to update timer', async () => {
    const timer: Timer = {
      name: 'pomodoro',
      status: StatusType.Idle,
      timerType: TimerType.Pomodoro,
      totalSeconds: 60,
      secondsElapsed: 0,
    };
    
    render(<SettingsModal timers={[timer]} onClose={() => {}} onTimersChange={() => {}} />);

    const timerAction = await screen.findByTitle('Increment');
    user.click(timerAction);

    const timerValue = screen.getByDisplayValue((60 / 60) + 1);

    expect(timerValue).toBeInTheDocument();
  });

  it('should be able to submit changes', () => {
    const timers: Timer[] = [
      {
        name: 'pomodoro',
        status: StatusType.Idle,
        timerType: TimerType.Pomodoro,
        totalSeconds: 2000,
        secondsElapsed: 0,
      },
      {
        name: 'short break',
        status: StatusType.Idle,
        timerType: TimerType.ShortBreak,
        totalSeconds: 2000,
        secondsElapsed: 0,
      },
    ];
    const onTimersChange = jest.fn();
    const onClose = jest.fn();
    
    render(<SettingsModal timers={timers} onClose={onClose} onTimersChange={onTimersChange} />);

    const submitButton = screen.getByText('Apply');
    user.click(submitButton);

    expect(onTimersChange).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalled();
  });
});