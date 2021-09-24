import { render, screen } from '../../../infra/test-utils';
import Text from './index';

describe('<Text />', () => {
  it('should render component', () => {
    render(
      <Text variant="appTitle">foo</Text>,
    );

    const text = screen.getByText('foo');
    expect(text).toMatchSnapshot();
  });

  it('should render as the HTML element passed by props', () => {
    render(
      <Text variant="heading3" tag="h3">foo</Text>,
    );

    const text = screen.getByText('foo');

    expect(text.nodeName).toBe('H3');
  });
});
