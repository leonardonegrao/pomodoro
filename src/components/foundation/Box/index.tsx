import styled from 'styled-components';

interface StyledBoxProps {
  flexDirection?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  width?: string;
  height?: string;
}

const StyledBox = styled.div<StyledBoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};

  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : '100%'};
`;

export interface BoxProps extends React.ComponentPropsWithoutRef<'div'>, StyledBoxProps {
  as?: React.ElementType;
  width?: string;
  height?: string;
}

export default function Box({
  as = 'div',
  children,
  ...rest
}: BoxProps) {
  return (
    <StyledBox as={as} {...rest}>
      {children}
    </StyledBox>
  );
}