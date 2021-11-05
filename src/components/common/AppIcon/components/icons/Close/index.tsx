import { IconProps } from '@components/common/AppIcon';

export default function Close({ height = '28', fillColor = '#1E213F' }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 14 14">
      <path
        fill={fillColor}
        fillRule="evenodd"
        // eslint-disable-next-line max-len
        d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
      />
    </svg>
  );
}