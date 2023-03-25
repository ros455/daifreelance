import React, { useState, useEffect } from 'react';

const Counter = ({ val, time}) => {
  const [currVal, setCurrVal] = useState(0);
  const [parseArr, setParseArr] = useState([]);

  useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrVal((prevValue) => {
          const newValue = prevValue + 1;
          return Math.min(newValue, val);
        });
      }, time);

      return () => clearInterval(intervalId);
  }, [ time, val]);

  useEffect(() => {
    const digits = currVal.toFixed(15).toString().split('.');
    const beforeDot = digits[0].padStart(15, '0');
    const afterDot = digits.length > 1 ? digits[1].padEnd(15, '0') : ''.padEnd(15, '0');
    setParseArr(beforeDot.split('').concat('.', afterDot.split('')));
  }, [currVal]);

  return (
    <div className='number_block'>
      {parseArr &&
        parseArr.map((num, idx) => (
          <div key={idx} className='number'>
            <h1 className={num === '.' ? 'dot' : ''}>{num}</h1>
          </div>
        ))}
    </div>
  );
};

export default Counter;