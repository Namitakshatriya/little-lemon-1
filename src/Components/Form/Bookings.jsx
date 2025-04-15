import React, { useReducer } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { bookingReducer } from '../../Components/Form/BookingReducer';

const Bookings = (props) => {
  useEffect(() => {

    const fetchTimes = async () => {
      if (state.date) {
        const times = await fetchAPI(state.date);
        dispatch({ type: "SET_TIMES", times });
      }
    };
  
    fetchTimes();
  }, [state.date]);
 
  return (
    
<Form availableTimes={state.times} dispatch={dispatch} submitForm={handleSubmit} />

  );
}

export default Bookings;
