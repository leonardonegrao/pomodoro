import AnimatedRing from '.';

import { screen, render } from '@infra/test-utils';

describe('<AnimatedRing />', () => {
  it('should render component', () => {
    render(<AnimatedRing elapsed={0} total={100} />);

    const animatedRing = screen.getByTitle('100% to go');

    expect(animatedRing).toBeInTheDocument();
  });
});