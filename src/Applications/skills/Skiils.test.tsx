import { render, screen, logRoles } from '@testing-library/react';
import { Skills } from './Skills';

describe('Start Learning Button Render', () => {
  test('Check It Present in DOM', async () => {
    const view = render(<Skills />);
    logRoles(view.container);
    // screen.debug();
    const getButtonRender = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    expect(getButtonRender).toBeInTheDocument();
  });
});
