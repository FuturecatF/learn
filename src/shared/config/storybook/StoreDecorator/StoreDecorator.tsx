import { Story } from '@storybook/react';
import { StoreProvider } from 'app/provider/StoreProvider';

export const StoreDecorator = (StoryComponent: Story) => (
  <StoreProvider>
    <StoryComponent />
  </StoreProvider>
);
