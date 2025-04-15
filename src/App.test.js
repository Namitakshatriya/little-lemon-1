import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders Little Lemon heading', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
 
  const heading = screen.getByText(/little lemon/i);
  expect(heading).toBeInTheDocument();
});