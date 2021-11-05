export enum TimerType {
  Pomodoro = 'Pomodoro',
  ShortBreak = 'ShortBreak',
  LongBreak = 'LongBreak',
}

export enum TotalSeconds {
  Pomodoro = 1500,
  ShortBreak = 300,
  LongBreak = 900,
}

export enum StatusType {
  Idle = 'idle',
  Paused = 'paused',
  Ongoing = 'ongoing',
  Finished = 'finished',
};

interface Timer {
  totalSeconds: TotalSeconds;
  secondsElapsed: number;
  status: StatusType;
  timerType: TimerType;
  name: 'pomodoro' | 'short break' | 'long break';
}

export default Timer;