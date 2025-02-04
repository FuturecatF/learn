import { Story } from '@storybook/react';
import { ThemeProvider } from '@/app/provider/ThemeProvider';
import { ThemeType } from '@/shared/types/sort';

export const ThemeDecorator = (theme: ThemeType) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
