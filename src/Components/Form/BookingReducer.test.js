import { bookingReducer, initialState } from '../../api';

describe('bookingReducer', () => {
  it('should return initial state when no action matches', () => {
    const state = { ...initialState };
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = bookingReducer(state, action);
    expect(newState).toEqual(state);
  });

  it('should update availableTimes when SET_DATE_AND_TIMES is dispatched', () => {
    const times = ['17:00', '18:00'];
    const action = { type: 'SET_DATE_AND_TIMES', times };
    const newState = bookingReducer(initialState, action);
    expect(newState.availableTimes).toEqual(times);
  });

  it('should update bookedTimes correctly when BOOK_TIME is dispatched', () => {
    const state = {
      ...initialState,
      bookedTimes: { '2025-04-20': ['17:00'] },
    };
    const action = {
      type: 'BOOK_TIME',
      date: '2025-04-20',
      time: '18:00',
    };
    const newState = bookingReducer(state, action);
    expect(newState.bookedTimes['2025-04-20']).toEqual(['17:00', '18:00']);
  });

  it('should handle an empty availableTimes list', () => {
    const action = { type: 'SET_DATE_AND_TIMES', times: [] };
    const newState = bookingReducer(initialState, action);
    expect(newState.availableTimes).toEqual([]);
  });

  it('should not modify state for invalid actions', () => {
    const action = { type: 'INVALID_ACTION' };
    const newState = bookingReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
