import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from '@/shared/config/i18n/i18nForTests';
import { StateSchema, StoreProvider } from '@/app/provider/StoreProvider';
import type { ComponentRenderOptions } from './types';
import { getRouteMain } from '@/shared/const/router';
import { ThemeProvider } from '@/app/provider/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import '@/app/styles/index.scss';

interface TestProviderProps {
  children: ReactNode;
  options?: ComponentRenderOptions;
}

export function TestProvider({
  children,
  options = {},
}: TestProviderProps) {
  const {
    route = getRouteMain(),
    initialState,
    asyncReducers,
    theme = Theme.LIGHT,
  } = options;
  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
              {children}
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
