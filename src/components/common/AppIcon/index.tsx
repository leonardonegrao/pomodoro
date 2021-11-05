import iconsMap from './components/icons';
import IconWrapper from './components/wrappers/IconWrapper';

export type IconName =  'arrow-down' | 'arrow-up' | 'check' | 'close' | 'settings';

export interface IconProps {
  height?: string;
  strokeColor?: 'primary' | 'secondary' | 'gray' | 'white' | string;
  strokeOpacity?: string;
  fillColor?: 'primary' | 'secondary' | 'gray' | 'white' | string;
  fillOpacity?: string;
}

export type Icon = (props: IconProps) => JSX.Element;

interface AppIconProps extends IconProps {
  icon: IconName;
}

export default function AppIcon({ icon, ...iconProps }: AppIconProps) {
  return <IconWrapper icon={iconsMap[icon]} {...iconProps} />;
}