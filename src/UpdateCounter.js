import React, { useState, useRef, useEffect } from 'react';

const UpdateCounter = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null);

  const updateCounter = () => {
    intervalRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    updateCounter();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    console.log('counter : ', counter);
    if (counter === 10) {
      console.log('intervalRef : ', intervalRef.current);
      clearInterval(intervalRef.current);
    }
  }, [counter]);

  return <div>{counter}</div>;
}
export default UpdateCounter;
