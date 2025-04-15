import React, { useState } from 'react';
import './Form.css';
import { fetchAPI } from '../../api'; 
import { useNavigate } from 'react-router-dom';


const Form = (props) => {
  const navigate = useNavigate(); 

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    const success = await props.submitForm({
      name,
      date,
      time,
      guests,
      occasion,
    });

    if (success) {
      // Navigate to the confirmation page if submission is successful
      navigate('/BookingConfirmation', {
        state: {
          name,
          date,
          selectedTime: time,
          guests,
          occasion,
        },
      });
    }
  

    setName("");
    setDate("");
    setTimes("");
    setGuests("");
    setOccasion("");
  };
  
  //   props.dispatch({
  //     type: "BOOK_TIME",
  //     date,
  //     time,
  //   });
  //   navigate('/BookingConfirmation', {
  //     state: {
  //       name,
  //       date,
  //       selectedTime: time,
  //       guests,
  //     },
  //   });
  // };

  

  const handleDateChange =  async (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    const dateObj = new Date(selectedDate);

    const times = await fetchAPI(dateObj);
    props.dispatch({
      type: "SET_DATE_AND_TIMES",
      date: selectedDate,
      times: times,
    });
  };

  //   fetchAPI(dateObj).then(times => {
  //     props.dispatch({
  //       type: "SET_DATE_AND_TIMES",
  //       time,
  //     });
  //   });
  // };
  const bookedTimes = props.bookedTimes?.[date] || [];

  return (
    <header>
      <section>
        <form className='reservation-form' onSubmit={handleSubmit}  aria-label="Table reservation form">
           <h1>Reserve a Table</h1>
          <fieldset>
          <div>
              <label htmlFor="Name">Full Name</label>
              <input
                id="full-name"
                value={name}
                onChange={(e) => setName (e.target.value) }
                type='text'
                required
                 aria-required="true"
                 aria-label="Full Name"
              />
            </div>
            <div>
              <label htmlFor="book-date">Select Date</label>
              <input
                id="book-date"
                value={date}
                onChange={handleDateChange}
                type='date'
                required
                aria-required="true"
                aria-label="Select reservation date"
              />
            </div>

            <div>
              <label htmlFor="book-time">Select Time</label>
              <select
                id="book-time"
                name="time"
                value={time}
                onChange={(e) => setTimes(e.target.value)}
                required
                 aria-required="true"
                 aria-label="Select reservation time"
              >
                <option value="">Select a time</option>
                {Array.isArray(props.availableTimes) &&
                props.availableTimes?.map((availableTime) => (
                  <option key={availableTime} 
                  value={availableTime}
                  disabled={bookedTimes.includes(availableTime)}
                  >
                    {availableTime}
                  </option>
                ))}
              

              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of guests</label>
              <input
                id="book-guests"
                name="guests"
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
                aria-required="true"
               aria-label="Number of guests"
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select
                id="book-occasion"
                name="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                 aria-required="true"
                 aria-label="Occasion" 
              >
                <option value="">Select occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>


            <div>
              <button aria-label="Submit reservation form">Submit</button>
            </div>

          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default Form;
