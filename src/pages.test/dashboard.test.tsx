import { render, screen } from '@testing-library/react';
import Dashboard from '@/pages/dashboard';

describe(`Home`, () => {
  it(`renders a heading`, () => {
    render(<Dashboard />);

    const heading = screen.getByRole(`heading`, {
      name: `🏠 Dashboard`,
    });

    expect(heading).toBeInTheDocument();
  });

  it(`renders a multi asa to algo card`, () => {
    render(<Dashboard />);

    const heading = screen.getByText(
      `Swap up to 5 Assets for desired Algo amount or vice versa.`,
    );

    expect(heading).toBeInTheDocument();
  });

  it(`renders a asa to asa card`, () => {
    render(<Dashboard />);

    const heading = screen.getByText(
      `Secure & Simple 1 to 1 asset swaps with minimal fees.`,
    );

    expect(heading).toBeInTheDocument();
  });
});
