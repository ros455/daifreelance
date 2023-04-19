import React, { useState, useEffect } from 'react';

const Counter = ({ val, time }) => {
  const [currVal, setCurrVal] = useState(0);
  const [parseArr, setParseArr] = useState([]);
  const [valueLength, setValueLength] = useState(0);

  useEffect(() => {
    if (currVal < val) {
      setTimeout(setCurrVal, time, currVal + 10);
    } else {
      setCurrVal(Math.min(currVal, val));
    }
  }, [currVal]);

  useEffect(() => {
    setParseArr(currVal.toString().split(''));
    setValueLength(currVal.toString().length);
  }, [currVal]);

  return (
    <div className='number_block'>
      {parseArr.map((item, idx) => (
        <div key={idx} style={{color:'#7DD1C1'}}>
          <p>{item}</p>
        </div>
      ))}
    </div>

  );
};

export default Counter;