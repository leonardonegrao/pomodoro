import Text from '@components/foundation/Text';

import { StatusType } from '@shared/models/Timer';

interface ActionButtonProps {
  status: StatusType;
  onStatusChange: () => void;
}

export default function ActionButton({ status, onStatusChange }: ActionButtonProps) {
  const contentMap = {
    [StatusType.Finished]: 'Restart',
    [StatusType.Ongoing]: 'Pause',
    [StatusType.Paused]: 'Resume',
    [StatusType.Idle]: 'Start',
  };

  return (
    <button onClick={() => onStatusChange()}>
      <Text
        as="h2"
        variant="heading3"
        color="gray.main"
      >
        {contentMap[status]}
      </Text>
    </button>
  );
}