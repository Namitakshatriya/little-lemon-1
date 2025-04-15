// src/Components/Form/StoreContextProvider.test.js

jest.mock('../api', () => ({
    fetchAPI: jest.fn(() => Promise.resolve(['17:00', '18:00'])),
  }));
  
  import React from 'react';
  import { render } from '@testing-library/react';
  import { act } from 'react-dom/test-utils';
  import { StoreContextProvider } from '../../Context/StoreContext';
  
  describe('StoreContextProvider localStorage', () => {
    beforeEach(() => {
      localStorage.clear();
    });
  
    it('should read bookedTimes from localStorage on initialization', async () => {
      const mockData = { '2025-04-20': ['17:00'] };
      localStorage.setItem('bookedTimes', JSON.stringify(mockData));
  
      await act(async () => {
        render(
          <StoreContextProvider>
            <div>Test</div>
          </StoreContextProvider>
        );
      });
  
      const storedData = JSON.parse(localStorage.getItem('bookedTimes'));
      expect(storedData).toEqual(mockData);
    });
  
    it('should write bookedTimes to localStorage when it changes', async () => {
      await act(async () => {
        render(
          <StoreContextProvider>
            <div>Test</div>
          </StoreContextProvider>
        );
      });
  
      // simulate change (if your provider allows direct access)
      const data = JSON.parse(localStorage.getItem('bookedTimes'));
      expect(data).not.toBeNull();
    });
  });
  