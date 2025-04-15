import React, { useReducer, useEffect } from 'react';
import './Reservations.css';
import { useNavigate } from 'react-router-dom';
import Form from '../../Components/Form/Form';
import { fetchAPI, submitAPI } from '../../api';
import { bookingReducer, initialState } from '../../Components/Form/BookingReducer';


// // Define initial state at the top
// const initialState = {
//   selectedDate: '',
//   availableTimes: [],
//   bookedTimes: {},
// };

// // Reducer function to manage booking state
// function updateTimes(state, action) {
//   switch (action.type) {
//     case 'BOOK_TIME': {
//       const dateStr = action.date;
//       const booked = {
//         ...state.bookedTimes,
//         [dateStr]: [...(state.bookedTimes[dateStr] || []), action.time],
//       };
//       return {
//         ...state,
//         bookedTimes: booked,
//         availableTimes: state.availableTimes.filter(t => t !== action.time),
//       };
//     }

//     case 'SET_DATE_AND_TIMES': {
//       const dateStr = action.date;
//       const bookedForDate = state.bookedTimes[dateStr] || [];
//       const available = action.times.filter(time => !bookedForDate.includes(time));
//       return {
//         ...state,
//         selectedDate: dateStr,
//         availableTimes: available,
//       };
//     }

//     default:
//       return state;
//   }
// }

const Reservations = () => {
  const navigate = useNavigate();

  const init = () => {
    try {
      const stored = JSON.parse(localStorage.getItem("bookedTimes")) || {};
      return { ...initialState, bookedTimes: stored };
    } catch {
      return initialState;
    }
  };

  const [state, dispatch] = useReducer(bookingReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('bookedTimes', JSON.stringify(state.bookedTimes));
  }, [state.bookedTimes]);

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      dispatch({
        type: 'BOOK_TIME',
        date: formData.date,
        time: formData.time,
      });

      const newTimes = await fetchAPI(new Date(formData.date));
      dispatch({
        type: 'SET_DATE_AND_TIMES',
        date: formData.date,
        times: newTimes,
      });

      navigate('/BookingConfirmation', { state: { formData } });
    }
  };

  return (
    <Form
      availableTimes={state.availableTimes}
      bookedTimes={state.bookedTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
};

export default Reservations;
