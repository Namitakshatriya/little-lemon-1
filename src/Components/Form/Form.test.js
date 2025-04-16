import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from "./Form";
import { BrowserRouter } from 'react-router-dom';
import { fetchAPI } from '../../api';

jest.mock('../../api', () => ({
  fetchAPI: jest.fn(),
}));

const mockProps = {
  availableTimes: ['17:00', '18:00'],
  bookedTimes: {},
  dispatch: jest.fn(),
  submitForm: jest.fn(),
};

// Test with proper routing context for navigation hooks like useNavigate
test('renders the BookingForm heading with Router', () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  const heading = screen.getByText(/reserve a table/i);
  expect(heading).toBeInTheDocument();
});

test('calls submitForm on form submit', async () => {
  render(
    <BrowserRouter>
      <Form {...mockProps} />
    </BrowserRouter>
  );

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Select Date/i), { target: { value: '2025-04-20' } });
  fireEvent.change(screen.getByLabelText(/Select reservation time/i), { target: { value: '17:00' } });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

  
  // Mock fetchAPI to resolve with mock times
  fetchAPI.mockResolvedValue(['17:00', '18:00']);

  // Simulate form submission
  fireEvent.submit(screen.getByRole('button'));

  await waitFor(() => {
    expect(mockProps.submitForm).toHaveBeenCalledWith({
      name: 'John Doe',
      date: '2025-04-20',
      time: '17:00',
      guests: '4',
      occasion: 'Birthday',
    });
  });
});

test('Full Name input has correct HTML5 attributes', () => {
  render(
    <BrowserRouter>
      <Form {...mockProps} />
    </BrowserRouter>
  );
  const nameInput = screen.getByLabelText(/Full Name/i);
  expect(nameInput).toHaveAttribute('type', 'text');
  expect(nameInput).toBeRequired();
});

test('Date input has correct HTML5 attributes', () => {
  render(
    <BrowserRouter>
      <Form {...mockProps} />
    </BrowserRouter>
  );
  const dateInput = screen.getByLabelText(/Select reservation date/i);
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toBeRequired();
});

test('Time select has required attribute', () => {
  render(
    <BrowserRouter>
      <Form {...mockProps} />
    </BrowserRouter>
  );
  const timeSelect = screen.getByLabelText(/Select reservation time/i);
  expect(timeSelect).toBeRequired();
});

test('Guests input has correct HTML5 attributes', () => {
  render(
    <BrowserRouter>
      <Form {...mockProps} />
    </BrowserRouter>
  );
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toBeRequired();
});

test('Occasion select has required attribute', () => {
  render(
    <BrowserRouter>
      <Form {...mockProps} />
    </BrowserRouter>
  );
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  expect(occasionSelect).toBeRequired();
});

test('Submit button is disabled when form is invalid', () => {
  render(
    <BrowserRouter>
      <Form {...mockProps} />
    </BrowserRouter>
  );
  const submitButton = screen.getByRole('button', { name: /submit reservation form/i });
  expect(submitButton).toBeDisabled();
});

test('Submit button is enabled when form is valid', async () => {
  render(
    <BrowserRouter>
      <Form {...mockProps} />
    </BrowserRouter>
  );

  fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText(/Select reservation date/i), { target: { value: '2025-04-21' } });
  fireEvent.change(screen.getByLabelText(/Select reservation time/i), { target: { value: '17:00' } });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

  const submitButton = screen.getByRole('button', { name: /submit reservation form/i });

  await waitFor(() => {
    expect(submitButton).toBeEnabled();
  });
});
