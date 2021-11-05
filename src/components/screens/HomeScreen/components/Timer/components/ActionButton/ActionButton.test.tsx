import user from '@testing-library/user-event';

import ActionButton from '.';

import { StatusType } from '@shared/models/Timer';

import { screen, render } from '@infra/test-utils';

describe('<ActionButton />', () => {
  it('should render component', () => {
    render(<ActionButton status={StatusType.Idle} onStatusChange={() => {}} />);

    const actionButton = screen.getByRole('button');

    expect(actionButton).toBeInTheDocument();
  });

  it('should call onStatusChange when clicked', () => {
    const onStatusChange = jest.fn();
    render(<ActionButton status={StatusType.Idle} onStatusChange={onStatusChange} />);

    const actionButton = screen.getByRole('button');
    user.click(actionButton);

    expect(onStatusChange).toHaveBeenCalled();
  });
});
