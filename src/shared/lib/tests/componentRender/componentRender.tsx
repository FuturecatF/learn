import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from '@/shared/config/i18n/i18nForTests';
import { StateSchema, StoreProvider } from '@/app/provider/StoreProvider';
import type { ComponentRenderOptions } from './types';
import { getRouteMain } from '@/shared/const/router';

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  const { route = getRouteMain(), initialState, asyncReducers } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
}
