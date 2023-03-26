import React, { useState, useEffect } from 'react';

const Counter = ({ val, time}) => {
  const [currVal, setCurrVal] = useState(0);
  const [parseArr, setParseArr] = useState([]);


  useEffect(() => {
    if(currVal < val) {
      setTimeout(setCurrVal, time, currVal + 1);
    } 
    else {
      setCurrVal(Math.min(currVal,val))
    }
}, [currVal]);

  useEffect(() => {
    const digits = currVal.toFixed(15).toString().split('.');
    console.log('digits',digits);
    const beforeDot = digits[0].padStart(15, '0');
    console.log('beforeDot',beforeDot);
    const afterDot = digits.length > 1 ? digits[1].padEnd(15, '0') : ''.padEnd(15, '0');
    console.log('afterDot',afterDot);
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