import styled from 'styled-components';

import AppIcon from '@components/common/AppIcon';
import Box from '@components/foundation/Box';

import { Colors } from '@shared/models/Colors';

const StyledColorSelect = styled(Box)`
  label {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    width: 50px;
    border-radius: 50%;

    cursor: pointer;
    border: 1px solid transparent;

    transition: border 0.3s linear;

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.gray.main};
    }

    input {
      width: 0px;
    }
  }

  label + label {
    margin-left: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-end;
  }
`;

const InnerCircle = styled(Box)<{ color: Colors }>`
  background: ${({ theme, color }) => theme.colors.secondary[color]};

  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

interface ColorSelectProps {
  value: Colors;
  onChange: (value: Colors) => void;
}

export default function ColorSelect({ value, onChange }: ColorSelectProps) {
  const colors: Colors[] = [Colors.Orange, Colors.Blue, Colors.Purple];

  return (
    <StyledColorSelect role="radiogroup">
      {colors.map((color) => (
        <label
          key={color}
          onClick={() => onChange(color)}
        >
          <InnerCircle color={color} justifyContent="center" alignItems="center">
            {value === color && <AppIcon icon="check" strokeColor="#161932" height="11" />}
          </InnerCircle>
          <input
            name="color-select"
            type="radio"
            value={color}
            readOnly
            checked={value === color}
          />
        </label>
      ))}
    </StyledColorSelect>
  );
}