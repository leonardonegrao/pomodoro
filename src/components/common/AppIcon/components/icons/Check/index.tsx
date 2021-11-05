import { IconProps } from '@components/common/AppIcon';

export default function Check({ height = '28', strokeColor = '#D7E0FF' }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 15 11">
      <path
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        d="M1 5.5L4.95263 9.45263L13.4053 1"
      />
    </svg>
  );
}