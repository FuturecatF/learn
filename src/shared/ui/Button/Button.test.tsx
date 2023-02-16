import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test render clear theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
