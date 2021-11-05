import { useState, useEffect } from 'react';

import Timer, { TimerType, StatusType } from '@shared/models/Timer';

export default function useCountdown(timers: Timer[], type: TimerType) {
  const [timer, setTimer] = useState<Timer>(
    () => timers.find((timer) => timer.timerType === type)!
  );
  const [display, setDisplay] = useState<string>(
    () => new Date(timer.totalSeconds * 1000).toISOString().substr(14, 5)
  );

  function setTimerStatus() {
    const currentStatus = timer.status;

    if (currentStatus === StatusType.Ongoing) setTimer((oldState) => ({ ...oldState, status: StatusType.Paused }));
    else if (currentStatus === StatusType.Paused) setTimer((oldState) => ({ ...oldState, status: StatusType.Ongoing }));
    else if (currentStatus === StatusType.Finished) setTimer(({ timerType }) => ({ ...timers.find((timer) => timer.timerType === timerType)!, status: StatusType.Ongoing }));
    else if (currentStatus === StatusType.Idle) setTimer((oldState) => ({ ...oldState, status: StatusType.Ongoing }));
  }

  useEffect(() => {
    let interval: number | undefined;

    function handleUpdate(): void {
      if (timer.totalSeconds === timer.secondsElapsed) {
        setTimer((oldState) => ({ ...oldState, status: StatusType.Finished }));
      } else {
        const newValue = timer.secondsElapsed + 1;
        setTimer((oldState) => ({ ...oldState, secondsElapsed: newValue }));

        const newDisplay = new Date((timer.totalSeconds - newValue) * 1000).toISOString().substr(14, 5);
        setDisplay(newDisplay);
      }
    }

    if (timer.status === StatusType.Ongoing) {
      interval = window.setInterval(handleUpdate, 1000);
    }

    return () => {
      window.clearInterval(interval);
    };
  }, [timer]);

  useEffect(() => {
    const newTimer = timers.find((timer) => timer.timerType === type)!;
    setTimer(newTimer);

    const newDisplay = new Date(newTimer.totalSeconds * 1000).toISOString().substr(14, 5);
    setDisplay(newDisplay);
  }, [type, timers]);

  return { timer, setTimerStatus, display };
}