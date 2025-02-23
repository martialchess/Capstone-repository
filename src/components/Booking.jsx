import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import Swal from 'sweetalert2';

function fetchAPI(date) {
  // Return some static time slots for demo purposes.
  return ['17:00', '18:00', '19:00'];
}

function submitAPI(formData) {
  console.log("Form submitted:", formData);
  // Simulate successful submission
  return true;
}

function updateTimes(state, newDate) {
  return { availableTimes: fetchAPI(new Date(newDate)) };
}

const Booking = () => {
  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      // Show a confirmation alert using SweetAlert2
      Swal.fire({
        title: 'Reservation Confirmed!',
        text: 'Your reservation has been successfully made.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="booking-container">
      <h2 className="booking-heading">Make a Reservation</h2>
      <BookingForm
        availableTimes={state.availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default Booking;
