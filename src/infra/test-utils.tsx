import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../theme/index';

const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
