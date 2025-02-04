import { StoryFn } from '@storybook/react';
import { ThemeProvider } from '@/app/provider/ThemeProvider';
import { ThemeType } from '@/shared/types/sort';

export const ThemeDecorator = (theme: ThemeType) => (StoryComponent: StoryFn) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
