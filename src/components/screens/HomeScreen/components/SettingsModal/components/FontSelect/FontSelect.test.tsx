import user from '@testing-library/user-event';

import FontSelect from '.';

import { Fonts } from '@shared/models/Fonts';

import { screen, render } from '@infra/test-utils';

describe('<FontSelect />', () => {
  it('should render component', () => {
    render(<FontSelect value={Fonts.Sans} onChange={() => {}} />);

    const fontSelect = screen.getByRole('radiogroup');

    expect(fontSelect).toBeInTheDocument();
  });

  it('should call onChange', () => {
    const onChange = jest.fn();
    render(<FontSelect value={Fonts.Sans} onChange={onChange} />);

    const fontSelectOption = screen.getByDisplayValue(Fonts.Serif);
    user.click(fontSelectOption);

    expect(onChange).toHaveBeenCalledWith(Fonts.Serif);
  });
});