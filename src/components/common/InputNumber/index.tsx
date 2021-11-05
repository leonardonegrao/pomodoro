import styled from 'styled-components';

import AppIcon from '../AppIcon';

import Box from '@components/foundation/Box';

const StyledInputNumber = styled(Box)`
  max-height: 40px;
  max-width: 140px;

  border-radius: 10px;
  padding-left: 16px;
  padding-right: 16px;

  background: ${({ theme }) => theme.colors.gray.light};

  input {
    background: transparent;
    border: none;
    outline: none;

    max-width: 40%;
  }

  .actions {
    max-width: 40px;
    
    > button {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      width: 100%;
      height: 20px;
      padding: 0px;

      opacity: 0.25;

      &.up {
        justify-content: flex-end;
        padding-bottom: 4px;
      }

      &.down {
        justify-content: flex-start;
        padding-top: 4px;
      }

      &:hover {
        transition: opacity 0.3s ease-in-out;
        opacity: 1;
      }

      &:active {
        transition: transform 0.3s ease-in-out;
        
        &.up {
          transform: translateY(-4px);
        }

        &.down {
          transform: translateY(4px);
        }
      }
    }
  }
`;

interface InputNumberProps {
  value: number;
  onChange: (value: number) => void;
}

export default function InputNumber({ value, onChange }: InputNumberProps) {
  return (
    <StyledInputNumber justifyContent="space-between">
      <input type="number" readOnly value={value} />

      <Box flexDirection="column" className="actions">
        <button title="Increment" className="up" type="button" onClick={() => onChange(value + 1)}>
          <AppIcon icon="arrow-up" strokeColor="#1E213F" strokeOpacity="0.25" height="7" />
        </button>
        <button title="Decrement" className="down" type="button" onClick={() => onChange(value - 1)}>
          <AppIcon icon="arrow-down" strokeColor="#1E213F" strokeOpacity="0.25" height="7" />
        </button>
      </Box>
    </StyledInputNumber>
  );
}