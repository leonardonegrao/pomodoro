import Logo from '.';

import { screen, render } from '@infra/test-utils';

describe('<Logo />', () => {
  it('should render component', () => {
    render(<Logo />);

    const logo = screen.getByTitle('pomodoro');

    expect(logo).toBeInTheDocument();
  });
});