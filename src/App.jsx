import React from 'react';
import FetchingData from './components/FetchingData';
const App = () => {
  return (
    <div className='bg-slate-500 h-screen'>
      <h1 className='text-2xl text-center pt-16 font-medium'>
        Experiment with Anything here!
      </h1>
      
      <div className='flex justify-center mt-12'>
        <FetchingData />
      </div>

    </div>
  );
};

export default App;
