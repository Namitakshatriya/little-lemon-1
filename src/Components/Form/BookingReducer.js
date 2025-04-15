// BookingReducer.js

export const initialState = {
    selectedDate: '',
    availableTimes: [],
    bookedTimes: {},
  };
  
  export function bookingReducer(state, action) {
    switch (action.type) {
      case 'BOOK_TIME': {
        const dateStr = action.date;
        const booked = {
          ...state.bookedTimes,
          [dateStr]: [...(state.bookedTimes[dateStr] || []), action.time],
        };
        return {
          ...state,
          bookedTimes: booked,
          availableTimes: state.availableTimes.filter(t => t !== action.time),
        };
      }
  
      case 'SET_DATE_AND_TIMES': {
        const dateStr = action.date;
        const bookedForDate = state.bookedTimes[dateStr] || [];
        const available = action.times.filter(time => !bookedForDate.includes(time));
        return {
          ...state,
          selectedDate: dateStr,
          availableTimes: available,
        };
      }
  
      default:
        return state;
    }
  }
  