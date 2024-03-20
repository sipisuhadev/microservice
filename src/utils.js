export const generateRandomResponse = () => {

  const WINDOW_SIZE = 10;

  const windowCurrState = Array.from({ length: WINDOW_SIZE }, () => Math.floor(Math.random() * 100) + 1);

 
  const windowPrevState = windowCurrState.slice(0, -1);

 
  const avg = windowCurrState.reduce((sum, num) => sum + num, 0) / WINDOW_SIZE;


  const responseData = {
    windowPrevState,
    windowCurrState,
    numbers: windowCurrState,
    avg: avg.toFixed(2), 
  };

  return responseData;
};