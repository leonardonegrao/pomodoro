import Button from '.';

import { screen, render } from '@infra/test-utils';

describe('<Button />', () => {
  it('should render component', () => {
    render(<Button>Button</Button>);

    const button = screen.getByText('Button');

    expect(button).toBeInTheDocument();
  });
});