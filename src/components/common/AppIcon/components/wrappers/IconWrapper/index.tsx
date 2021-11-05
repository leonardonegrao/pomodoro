import { Icon, IconProps } from '@components/common/AppIcon';

interface AppIconProps extends IconProps {
  icon: Icon;
}

export default function AppIcon({ icon, ...iconProps }: AppIconProps) {
  const IconComponent = icon;
  
  return <IconComponent {...iconProps} />;
};