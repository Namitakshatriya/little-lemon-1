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

// test('Renders the BookingForm heading with mocked props', () => {
//   render(
//     <BrowserRouter>  {/* Wrap in BrowserRouter for any router-related functionality */}
//       <Form {...mockProps} />
//     </BrowserRouter>
//   );
//   const headingElement = screen.getByText(/reserve a table/i);
//   expect(headingElement).toBeInTheDocument();
// });
