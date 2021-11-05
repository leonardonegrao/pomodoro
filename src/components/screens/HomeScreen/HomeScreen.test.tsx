import user from '@testing-library/user-event';

import HomeScreen from '.';

import { screen, render } from '@infra/test-utils';

describe('<HomeScreen />', () => {
  it('should render component', () => {
    render(<HomeScreen />);

    const homeScreen = screen.getByRole('main');

    expect(homeScreen).toBeInTheDocument();
  });

  it('should toggle <SettingsModal />', () => {
    render(<HomeScreen />);

    const settingsButton = screen.getByTitle('Open Settings');
    user.click(settingsButton);

    const settingsModal = screen.getByRole('dialog');

    expect(settingsModal).toBeInTheDocument();
  });
});