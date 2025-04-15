import React from 'react';
import { useLocation } from 'react-router-dom';
import './Form.css';


const BookingConfirmation = () => {
  const location = useLocation();
  const formData = location.state?.formData;
  if (!formData) {
    return <p>Something went wrong. No booking data found.</p>;
  }
  const { name, date, time, guests ,occasion } = formData;

  return (
    <div className='confirmation-message'>
      
      <h1>🎉 Congratulations, {name}!</h1>
      <p>Your reservation has been confirmed. Here are the details:</p>
      <table className="booking-summary-table">
        <tbody>
          <tr>
            <td><strong> Name</strong></td>
            <td>{name}</td>
          </tr>
          <tr>
            <td><strong> Date</strong></td>
            <td>{date}</td>
          </tr>
          <tr>
            <td><strong> Time</strong></td>
            <td>{time}</td>
          </tr>
          <tr>
            <td><strong> Guest</strong></td>
            <td>{guests}</td>
          </tr>
          
          <tr>
            <td><strong> Occasion</strong></td>
            <td>{occasion}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default BookingConfirmation;
