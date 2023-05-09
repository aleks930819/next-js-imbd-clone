'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }) => {
  useEffect(() => {
    throw new Error(error);
  }, [error]);
  return (
    <div>
      <h1>Something went wrong</h1>
      <button onClick={() => reset()}
       className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >Try Again</button>
    </div>
  );
};

export default Error;
