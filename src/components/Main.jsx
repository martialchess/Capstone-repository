import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';

// Dummy API function: returns available times for the given date.
function fetchAPI(date) {
  return ['17:00', '18:00', '19:00'];
}

// Dummy API function: simulates booking submission.
function submitAPI(formData) {
  console.log("Submitting form data:", formData);
  return true;
}

// Reducer: updates available times when the date changes.
function updateTimes(state, newDate) {
  return { availableTimes: fetchAPI(new Date(newDate)) };
}

const Main = () => {
  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state.availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
