import { render } from '../../../infra/test-utils';

import SEO from './index';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

describe('<SEO />', () => {
  it('should pass metadata to document', () => {
    const title = 'page title';
    const description = 'page description';

    render(
      <SEO
        title={title}
        description={description}
      />,
      { container: document.head }
    );

    const descriptionElement = document.getElementsByTagName('meta').namedItem('description');

    expect(document.title).toBe(title);
    expect(descriptionElement!.content).toBe(description);
  });
});
