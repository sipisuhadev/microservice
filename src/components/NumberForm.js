import React, { useState } from 'react';

const NumberForm = ({ handleSubmit }) => {
  const [numberId, setNumberId] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(numberId); 
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Number ID:
        <input type="text" value={numberId} onChange={(e) => setNumberId(e.target.value)} />
      </label>
      <button type="submit">Fetch Numbers</button>
    </form>
  );
};

export default NumberForm;
