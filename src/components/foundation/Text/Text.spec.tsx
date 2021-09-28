import { render, screen } from '../../../infra/test-utils';
import Text from './index';

describe('<Text />', () => {
  it('should render component', () => {
    render(
      <Text
        color="white"
        variant="appTitle"
      >
        foo
      </Text>,
    );

    const text = screen.getByText('foo');
    expect(text).toMatchSnapshot();
  });

  it('should render as the HTML element passed by props', () => {
    render(
      <Text
        as="h3"
        color="white"
        variant="heading3"
      >
        foo
      </Text>,
    );

    const text = screen.getByText('foo');

    expect(text.nodeName).toBe('H3');
  });

  it('should render using the color passed by props', () => {
    const { container } = render(
      <Text
        as="h3"
        color="primary.main"
        variant="heading3"
      >
        foo
      </Text>,
    );

    expect(container.firstChild).toHaveStyle('color: #1E213F');
  });

  it('should apply any options passed by props', () => {
    render(
      <Text
        as="h3"
        color="primary.main"
        options={{
          opacity: 0.2,
          fontWeight: '500',
          lineHeight: '30px',
        }}
        variant="heading3"
      >
        foo
      </Text>,
    );

    const text = screen.getByText('foo');

    expect(text).toHaveStyle('opacity: 0.2');
    expect(text).toHaveStyle('font-weight: 500');
    expect(text).toHaveStyle('line-height: 30px');
  });
});
