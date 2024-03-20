import React, { useState } from 'react';
import NumberForm from './components/NumberForm';
import NumberResponse from './components/NumberResponse';
import { generateRandomResponse } from './utils';

function App() {
  const [responseData, setResponseData] = useState(null);

 
  const handleSubmit = async (numberId) => {
 
    if (!Number.isInteger(Number(numberId))) {
      console.error('Invalid input: Please enter an integer');
      return;
    }

   
    const parsedNumberId = parseInt(numberId);

    const response = generateRandomResponse();

  
    setResponseData(response);
  };

  return (
    <div className="App">
      <h1>Average Calculator Microservice</h1>
      <NumberForm handleSubmit={handleSubmit} />
      <NumberResponse responseData={responseData} />
    </div>
  );
}

export default App;