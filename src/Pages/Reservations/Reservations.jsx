import React, { useReducer, useEffect } from 'react';
import './Reservations.css';
import { useNavigate } from 'react-router-dom';
import Form from '../../Components/Form/Form';
import { fetchAPI, submitAPI } from '../../api';
import { bookingReducer, initialState } from '../../Components/Form/BookingReducer';


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
