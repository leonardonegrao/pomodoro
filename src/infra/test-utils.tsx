import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';

import { ThemeProvider } from '@shared/contexts/ThemeProvider';
import { TimersProvider } from '@shared/contexts/TimersProvider';


const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider>
    <TimersProvider>
      {children}
    </TimersProvider>
  </ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
