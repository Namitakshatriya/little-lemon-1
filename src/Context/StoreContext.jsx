import { createContext, useState, useReducer, useEffect } from "react";
import { food_list } from "../icons_assets/assets";
import { fetchAPI } from '../api';

// Reducer and initial state defined locally
const initialState = {
  selectedDate: '',
  availableTimes: [],
  bookedTimes: JSON.parse(localStorage.getItem('bookedTimes')) || {},
};

function bookingReducer(state, action) {
  switch (action.type) {
    case 'BOOK_TIME': {
      const dateStr = action.date;
      const updatedBooked = {
        ...state.bookedTimes,
        [dateStr]: [...(state.bookedTimes[dateStr] || []), action.time],
      };
      return {
        ...state,
        bookedTimes: updatedBooked,
        availableTimes: state.availableTimes.filter(t => t !== action.time),
      };
    }

    case 'SET_DATE_AND_TIMES': {
      const dateStr = action.date || state.selectedDate;
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

const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  useEffect(() => {
    const today = new Date();
    fetchAPI(today).then(times => {
      dispatch({ type: "SET_DATE_AND_TIMES", date: today.toISOString().split("T")[0], times });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("bookedTimes", JSON.stringify(state.bookedTimes));
  }, [state.bookedTimes]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    getTotalCartAmount: () => {
      let total = 0;
      for (const id in cartItems) {
        const item = food_list.find(p => p._id === id);
        if (item) total += item.price * cartItems[id];
      }
      return total;
    },
    addToCart: id => setCartItems(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 })),
    removeFromCart: id => setCartItems(prev => ({ ...prev, [id]: Math.max((prev[id] || 1) - 1, 0) })),

    state,
    dispatch,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };
