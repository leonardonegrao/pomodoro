
import AppIcon, { IconName } from '.';
import iconsMap from './components/icons';

import { screen, render } from '@infra/test-utils';

describe('<AppIcon />', () => {
  it('should render icon variants', async () => {
    const icons = Object.keys(iconsMap) as IconName[];

    render(
      <div>
        {icons.map((icon) => (
          <div key={icon} data-testid="icon-variant">
            <AppIcon icon={icon} />
          </div>
        ))}
      </div>
    );

    const iconElements = await screen.findAllByTestId('icon-variant');
    const quantity = iconElements.length;
    const expectedQuantity = icons.length;

    expect(quantity).toBe(expectedQuantity);
  });
});