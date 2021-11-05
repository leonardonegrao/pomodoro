import styled from 'styled-components';

import Box from '@components/foundation/Box';

import { Fonts } from '@shared/models/Fonts';

const StyledFontSelect = styled(Box)`
  label {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    width: 50px;
    border-radius: 50%;

    cursor: pointer;
    border: 1px solid transparent;

    &:hover {
      transition: border 0.3s linear;
      border: 1px solid ${({ theme }) => theme.colors.gray.main};
    }

    &.active {
      background: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.white};
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

const InnerCircle = styled(Box)<{ fontFamily: Fonts, isActive: boolean }>`
  font-family: ${({ theme, fontFamily }) => theme.typography.fonts[fontFamily].fontFamily};

  height: 40px;
  width: 40px;
  border-radius: 50%;

  background: ${({ theme: { colors }, isActive }) => isActive ? colors.primary.main  : colors.gray.light};
  color: ${({ theme: { colors }, isActive }) => isActive ? colors.white : `${colors.primary.main}88`};
`;

interface FontSelectProps {
  value: string;
  onChange: (value: Fonts) => void;
}

export default function FontSelect({ value, onChange }: FontSelectProps) {
  const fonts: Fonts[] = [Fonts.Sans, Fonts.Serif, Fonts.Mono];

  return (
    <StyledFontSelect alignItems="center" role="radiogroup">
      {fonts.map((font) => (
        <label
          key={font}
          onClick={() => onChange(font)}
        >
          <InnerCircle
            fontFamily={font}
            justifyContent="center"
            alignItems="center"
            isActive={value === font}
          >
          Aa
          </InnerCircle>
          <input
            name="fonts-select"
            type="radio"
            value={font}
            readOnly
            checked={value === font}
          />
        </label>
      ))}
    </StyledFontSelect>
  );
}