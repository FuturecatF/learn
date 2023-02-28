import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import { App } from 'app/App';
import { StoreProvider } from 'app/provider/StoreProvider';
import { ThemeProvider } from './app/provider/ThemeProvider';

import 'app/styles/index.scss';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
