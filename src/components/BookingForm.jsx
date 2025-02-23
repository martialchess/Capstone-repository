import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  // Set today's date as default in YYYY-MM-DD format.
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    // Update available times based on the selected date.
    dispatch(newDate);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests };
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Choose Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>
      <div>
        <label htmlFor="time">Choose Time:</label>
        <select id="time" name="time" value={time} onChange={handleTimeChange}>
          {availableTimes.map((t, index) => (
            <option key={index} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={guests}
          onChange={handleGuestsChange}
          min="1"
          max="10"
          required
        />
      </div>
      <button type="submit">Reserve</button>
    </form>
  );
};

export default BookingForm;
