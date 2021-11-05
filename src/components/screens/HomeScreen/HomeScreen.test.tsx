import HomeScreen from '.';

import { screen, render } from '@infra/test-utils';

describe('<HomeScreen />', () => {
  it('should render component', () => {
    render(<HomeScreen />);

    const homeScreen = screen.getByRole('main');

    expect(homeScreen).toBeInTheDocument();
  });
});