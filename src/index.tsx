import { BrowserRouter } from 'react-router-dom';
import '@/shared/config/i18n/i18n';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '@/app/provider/ErrorBoundary';
import { App } from '@/app/App';
import { StoreProvider } from '@/app/provider/StoreProvider';
import { ThemeProvider } from './app/provider/ThemeProvider';
import '@/app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Container root is undefined');
}

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
