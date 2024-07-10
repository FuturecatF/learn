import { Story } from '@storybook/react';
import { ThemeProvider, ThemeType } from '@/app/provider/ThemeProvider';

export const ThemeDecorator = (theme: ThemeType) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
