import ArrowDown from './ArrowDown';
import ArrowUp from './ArrowUp';
import Check from './Check';
import Close from './Close';
import Settings from './Settings';

import { Icon } from '@components/common/AppIcon';

const iconsMap: { [key: string]: Icon } = {
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  'check': Check,
  'close': Close,
  'settings': Settings,
};

export default iconsMap;