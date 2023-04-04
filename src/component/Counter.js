import React, { useState, useEffect } from 'react';

const Counter = ({ val, time}) => {
  const [currVal, setCurrVal] = useState(0);
  const [parseArr, setParseArr] = useState([]);


  useEffect(() => {
    if(currVal < val) {
      setTimeout(setCurrVal, time, currVal + 2);
    } 
    else {
      setCurrVal(Math.min(currVal,val))
    }
}, [currVal]);


  return (
    <div className='number_block'>
      {currVal}
    </div>
  );
};

export default Counter;