import React, { useState, useEffect } from 'react';
import '../style/table.scss';

const CounterYear = ({ firstValue, val, time }) => {
  const [currVal, setCurrVal] = useState(firstValue);
  const [parseArr, setParsArr] = useState([]);
  const [dafaultArr, setDefaultArr] = useState(Array.from({ length: 31 }).fill('1'));

  useEffect(() => {
    const iterations = Math.ceil(Math.abs(val - firstValue) / 0.000001);
    const timePerIteration = 31536000000 / iterations;

    const intervalId = setInterval(() => {
      const elapsedTime = Date.now() - time;
      const newValue = Math.min(val, firstValue + (elapsedTime / timePerIteration) * 0.000001);
      setCurrVal(newValue);
      if (newValue === val) clearInterval(intervalId);
    }, 100);

    return () => clearInterval(intervalId);
  }, [time, val, firstValue]);

  useEffect(() => {
    const digits = currVal.toFixed(15).toString().split('.');
    const beforeDot = digits[0].padStart(15, '0');
    const afterDot = digits.length > 1 ? digits[1].padEnd(15, '0') : Array.from({ length: 15 }).fill('0').join('');
    setParsArr(beforeDot.split('').concat('.', afterDot.split('')));
  }, [currVal]);

  return (
      <div className='number_block'>
      {parseArr &&
      dafaultArr.map((num, idx) => (
        <div key={idx} className={` ${parseArr[idx] == '7'  ? 'active_number' : ''} number`} >
           <p className='after_number'>
            {!isNaN(parseArr[idx]) 
            ?
            Number(parseArr[idx]) + 1 == '10' ? '0' : Number(parseArr[idx]) + 1
            : 
            ''}
           </p>
          <h1 className={`${parseArr[idx] == '.' ? 'dot' : ''} main_number`}>{parseArr[idx]}</h1>
          <p className='before_number'>
            {!isNaN(parseArr[idx]) 
            ?
            parseArr[idx] - 1 == '-1' ? '0' : parseArr[idx] - 1 
            : 
            ''}
           </p>
        </div>
      ))}
    </div>
  );
};

export default CounterYear;