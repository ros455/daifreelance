import React from 'react';
const AirCounter = ({lastAir, angle}) => {
    return (
        <>
            <div className='air__speed'>
                <div className='back__big-circle'></div>
                <div className='eclipse-gradient'></div>
                <div className='eclipse-gradient-second'></div>
                <div className='eclipse-speed'></div>
            </div>
            <div className='back__small-circle'></div>
            <div className='circule-absolute'>
                <div className='circle'>
                    <div className='debug'>
                        {lastAir && lastAir}
                    </div>
                    <div className="dot" style={{ transform: `rotate(${angle ? angle : 210}deg)` }}></div>
                    
                </div>
            </div>
        </>
    );
};

export default AirCounter;