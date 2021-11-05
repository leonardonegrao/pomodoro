import { IconProps } from '@components/common/AppIcon';

export default function ArrowDown({ height = '28', strokeColor = '#D7E0FF' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 14 7"
    >
      <path fill="none" stroke={strokeColor} strokeWidth="2" d="M1 1l6 4 6-4" />
    </svg>
  );
}