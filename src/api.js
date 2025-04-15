

export const fetchAPI = async (date) => {
  try {
    // Simulate fetching available times
    const simulatedTimes = ["17:00", "18:00", "19:00", "20:00"];
    return simulatedTimes;
  } catch (error) {
    console.error("Failed to fetch times:", error);
    return []; // Fallback to an empty array
  }
};


  
  export const submitAPI = (formData) => {
    console.log("Submitted reservation:", formData);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000); // simulate form submission delay
    });
  };
  
  export const bookingReducer = (state, action) => {
    switch (action.type) {
      case "SET_DATE_AND_TIMES":
        return {
          ...state,
          availableTimes: action.times,
        };
      case "BOOK_TIME":
        const updatedBooked = {
          ...state.bookedTimes,
          [action.date]: [...(state.bookedTimes[action.date] || []), action.time],
        };
        return {
          ...state,
          bookedTimes: updatedBooked,
        };
      default:
        return state;
    }
  };
  