import React from 'react';

const NumberResponse = ({ responseData }) => {
  return (
    <div>
      {responseData ? (
        <div>
          <p>Window Previous State: [{responseData.windowPrevState.join(', ')}]</p>
          <p>Window Current State: [{responseData.windowCurrState.join(', ')}]</p>
          <p>Numbers: [{responseData.numbers.join(', ')}]</p>
          <p>Average: {responseData.avg}</p>
        </div>
      ) : (
        <p>No response yet</p>
      )}
    </div>
  );
};

export default NumberResponse;