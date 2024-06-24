import React, { useState, useEffect } from 'react';

const Counter = ({ val, time}) => {
  const [currVal, setCurrVal] = useState(0);
  const [parseArr, setParseArr] = useState([]);


  useEffect(() => {
    if(currVal < val) {
      setTimeout(setCurrVal, time, currVal + 10);
    } 
    else {
      setCurrVal(Math.min(currVal,val))
    }
}, [currVal]);

useEffect(() => {
  setParseArr(currVal.toString().split(''))
},[currVal])

console.log('parseArr',parseArr);
  return (
    <div className='number_block'>
      {parseArr.map((item,idx) => (
        <div key={idx} className='number'>
        <p>
          {item}
        </p>
        </div>
      ))}
    </div>
  );
};

export default Counter;