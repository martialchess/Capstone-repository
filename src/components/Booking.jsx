import React from 'react';
import BookingForm from './BookingForm';

const Booking = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <div>
      <h2>Make a Reservation</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default Booking;
