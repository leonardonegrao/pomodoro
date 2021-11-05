import styled from 'styled-components';

const StyledAnimatedRing = styled.svg<{ percentageToGo: number }>`
  width: 100%;
  height: 100%;

  position: relative;
  z-index: 1;

  circle {
    fill: none;
    stroke: ${({ theme }) => theme.colors.secondary[theme.activeTheme.color]};
    stroke-width: 8px;
    stroke-linecap: round;

    stroke-dashoffset: calc(812 - (779 * ${({ percentageToGo }) => percentageToGo}) / 100);
    stroke-dasharray: 779;

    transition: stroke-dashoffset 0.8s linear;
  }
`;

interface AnimatedRingProps extends React.ComponentPropsWithoutRef<'svg'> {
  elapsed: number;
  total: number;
}

export default function AnimatedRing({ elapsed, total, ...rest }: AnimatedRingProps) {
  const percentageToGo = 100 - ((elapsed * 100) / total);

  return (
    <StyledAnimatedRing
      percentageToGo={percentageToGo}
      viewBox="0 0 248.05 248.05"
      {...rest}
    >
      <title>{percentageToGo}% to go</title>
      <circle cx="124" cy="124" r="114" />
    </StyledAnimatedRing>
  );
}