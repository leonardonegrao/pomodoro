import React from 'react';

import Timer, { TimerType, StatusType, TotalSeconds } from '@shared/models/Timer';

interface TimerContextData {
  timers: Timer[];
  setTimers: (timers: Timer[]) => void;
}

const defaultTimers: Timer[] = [
  {
    name: 'pomodoro',
    timerType: TimerType.Pomodoro,
    totalSeconds: TotalSeconds.Pomodoro,
    secondsElapsed: 0,
    status: StatusType.Idle,
  },
  {
    name: 'short break',
    timerType: TimerType.ShortBreak,
    totalSeconds: TotalSeconds.ShortBreak,
    secondsElapsed: 0,
    status: StatusType.Idle,
  },
  {
    name: 'long break',
    timerType: TimerType.LongBreak,
    totalSeconds: TotalSeconds.LongBreak,
    secondsElapsed: 0,
    status: StatusType.Idle,
  },
];

const TimersContext = React.createContext<TimerContextData>({} as TimerContextData);

export function TimersProvider({ children }: React.ComponentProps<'div'>) {
  const [timers, setTimers] = React.useState(defaultTimers);

  return (
    <TimersContext.Provider value={{ timers, setTimers }}>
      {children}
    </TimersContext.Provider>
  );
}

export function useTimers(): [timers: Timer[], setTimers: (timers: Timer[]) => void] {
  const { timers, setTimers } = React.useContext(TimersContext);

  if (!timers && !setTimers) {
    throw new Error('useTimers must be used within a TimersProvider');
  }

  return [timers, setTimers];
}