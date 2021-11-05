import { render } from '../../../infra/test-utils';
import SEO from './index';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: Array<React.ReactElement> }) => <>{children}</>,
}));

describe('<SEO />', () => {
  it('should pass metadata to document', () => {
    const title = 'page title';
    const description = 'page description';

    render(
      <SEO title={title} description={description} />,
      { container: document.head },
    );

    const descriptionElement = document.getElementsByTagName('meta').namedItem('description');
    const imageElement = document.getElementsByTagName('meta').namedItem('image');
    const urlElement = document.getElementsByTagName('meta').namedItem('url');

    expect(document.title).toBe(`${title} | Pomodoro`);
    expect(descriptionElement?.content).toBe(description);
    expect(imageElement?.content).toBe(
      'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/wi7nij2cfvvqoxlemy1g.jpg',
    );
    expect(urlElement?.content).toBe('https://pomodoro-leonardonegrao.vercel.app/');
  });

  it('should pass fallback title if no title was provided', () => {
    const description = 'page description';

    render(
      <SEO description={description} />,
      { container: document.head },
    );

    expect(document.title).toBe('Pomodoro app');
  });
});
