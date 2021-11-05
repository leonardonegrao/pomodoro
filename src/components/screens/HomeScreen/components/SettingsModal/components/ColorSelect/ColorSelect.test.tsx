import user from '@testing-library/user-event';

import ColorSelect from '.';

import { Colors } from '@shared/models/Colors';

import { screen, render } from '@infra/test-utils';

describe('<ColorSelect />', () => {
  it('should render component', () => {
    render(<ColorSelect value={Colors.Orange} onChange={() => {}} />);

    const colorSelect = screen.getByRole('radiogroup');

    expect(colorSelect).toBeInTheDocument();
  });

  it('should call onChange', () => {
    const onChange = jest.fn();
    render(<ColorSelect value={Colors.Orange} onChange={onChange} />);

    const colorSelectOption = screen.getByDisplayValue(Colors.Blue);
    user.click(colorSelectOption);

    expect(onChange).toHaveBeenCalledWith(Colors.Blue);
  });
});