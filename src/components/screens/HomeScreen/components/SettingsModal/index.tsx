import { useState, FormEvent } from 'react';
import styled from 'styled-components';

import ColorSelect from './components/ColorSelect';
import FontSelect from './components/FontSelect';

import AppIcon from '@components/common/AppIcon';
import Button from '@components/common/Button';
import InputNumber from '@components/common/InputNumber';
import Box from '@components/foundation/Box';
import Text from '@components/foundation/Text';

import { useTheme } from '@shared/contexts/ThemeProvider';
import { Colors } from '@shared/models/Colors';
import { Fonts } from '@shared/models/Fonts';
import Timer, { TimerType } from '@shared/models/Timer';

const StyledSettingsModal = styled(Box)`
  position: absolute;
  top: 0;
  z-index: 3;

  background: #1E213F44;

  .overlay {
    position: relative;

    background: white;
    border-radius: 15px;

    max-height: 82%;
    max-width: 90%;

    .header {
      padding: 24px;
      max-height: 72px;
    
      .close-button {
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;

        &:hover {
          opacity: 1;
        }
      }
    }

    .divider {
      background: #E5E5E5;

      height: 1px;
      width: 100%;

      &.mx-24 {
        max-width: calc(100% - 48px);
      }
    }

    .section {
      padding: 24px;

      flex-direction: column;

      h2 {
        text-transform: uppercase;
        letter-spacing: 4.23px;
        margin-bottom: 18px;
      }

      .selects-box {
        flex-direction: column;
      }

      .item + .item {
        margin-top: 8px;
      }

      .divider {
        margin-top: 24px;
      }
    }

    .footer {
      position: absolute;
      bottom: calc(-53px / 2);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .overlay {
      max-width: 540px;
      max-height: 464px;

      .section {
        .selects-box {
          flex-direction: row;
          justify-content: space-between;
        }
      
        .item {
          flex-direction: column;
          align-items: flex-start;

          max-width: 140px;
        }
      }

      .section.responsive {
        flex-direction: row;
        justify-content: flex-end;
      }
    }
  }
`;

interface SettingsModalProps {
  timers: Timer[];
  onTimersChange: (timers: Timer[]) => void;
  onClose: () => void;
}

export default function SettingsModal({ timers, onTimersChange, onClose }: SettingsModalProps) {
  const [theme, setTheme] = useTheme();
  const [unconfirmedChanges, setUnconfirmedChanges] = useState({
    ...theme,
    timers,
  });

  function handleFontChange(fontFamily: Fonts) {    
    const updatedChanges = {
      ...unconfirmedChanges,
      fontFamily,
    };
    
    setUnconfirmedChanges(updatedChanges);
  };

  function handleColorChange(color: Colors) {
    const updatedChanges = {
      ...unconfirmedChanges,
      color,
    };
    
    setUnconfirmedChanges(updatedChanges);
  };

  function handleTimerChange(timerType: TimerType, value: number) {
    const updatedTimers = unconfirmedChanges.timers.map((timer) => {
      if (timerType === timer.timerType) {
        return {
          ...timer,
          totalSeconds: value * 60,
        };
      }

      return timer;
    });

    const updatedChanges = {
      ...unconfirmedChanges,
      timers: updatedTimers,
    };

    setUnconfirmedChanges(updatedChanges);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setTheme(unconfirmedChanges);
    onTimersChange(unconfirmedChanges.timers);
    onClose();
  }

  return (
    <StyledSettingsModal role="dialog" aria-labelledby="settings-modal-title">
      <Box
        as="form"
        onSubmit={handleSubmit}
        className="overlay"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Box className="header" justifyContent="space-between">
          <Text id="settings-modal-title" as="h1" variant="heading2" color="primary.main">Settings</Text>
          <button title="Close settings" onClick={onClose} type="button" className="close-button">
            <AppIcon icon="close" height="14" />
          </button>
        </Box>

        <div className="divider" />

        <Box className="section" flexDirection="column">
          <Text as="h2" variant="body2" color="primary.main">Time (Minutes)</Text>

          <Box className="selects-box">
            {unconfirmedChanges.timers.map((timer) => (
              <Box key={timer.timerType} className="item" justifyContent="space-between">
                <Text
                  as="h3"
                  variant="body2"
                  color="primary.main"
                  options={{ opacity: 0.4 }}
                >
                  {timer.name}
                </Text>
                <InputNumber
                  value={timer.totalSeconds / 60}
                  onChange={(value) => handleTimerChange(timer.timerType, value)}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <div className="divider mx-24" />

        <Box className="section responsive">
          <Text as="h2" variant="body2" color="primary.main">Font</Text>

          <FontSelect
            value={unconfirmedChanges.fontFamily!}
            onChange={handleFontChange}
          />
        </Box>

        <div className="divider mx-24" />

        <Box className="section responsive">
          <Text as="h2" variant="body2" color="primary.main">Color</Text>

          <ColorSelect value={unconfirmedChanges.color! as Colors} onChange={handleColorChange} />
        </Box>

        <Box className="footer" alignItems="flex-start" height="53px">
          <Button type="submit">Apply</Button>
        </Box>
      </Box>
    </StyledSettingsModal>
  );
}