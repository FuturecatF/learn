import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEXT')).toBeInTheDocument();
  });

  test('Test render clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEXT')).toHaveClass('clear');
    screen.debug();
  });
});
