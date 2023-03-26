import AnimWave from '../component/AnimWave'; 
import React, { useState, useEffect } from 'react';
import '../style/calc.css'
import '../style/style-null.css'
import '../style/circule.scss'
import CounterYear from './CounterYear';
import Counter from './Counter';
import AirCounter from './AirCounter';


const CalculatePublick = () => {
    const [allData, setAllData] = useState([]);
    const [lastRate, setaLastRate] = useState(0);
    const [lastEmission, setLastEmission] = useState(0);
    const [lastAir, setLastAir] = useState(0);
    const [time, setTime] = useState(0);
    const [totalbalance, setTotalbalance] = useState(0);
    const [totalbalanceHeader, setTotalbalanceHeader] = useState(0);

    useEffect(() => {
        fetch("https://calc-server.herokuapp.com/getall")
            .then((res) => res.json())
            .then((res) => setAllData(res));
    }, []);

    useEffect(() => {
        if (allData.length != 0) {
            let totalSumHeader = 0;
            let totalSum = 0;
            allData.forEach((item) => {
                totalSumHeader = item.balans + totalSumHeader
            })
            setTotalbalanceHeader(totalSumHeader.toFixed(0))

            for (let i = 0; i < allData.length - 1; i++) {
                totalSum = allData[i].balans + totalSum

            }
            setTotalbalance(totalSum.toFixed(0));
            returnLastItem(allData)
        }
    }, [allData]);

    const returnLastItem = (arr) => {
        setaLastRate((arr[arr.length - 1]?.rate))
        setLastEmission((arr[arr.length - 1]?.emission))
        setLastAir((arr[arr.length - 1]?.air) * 100)
        const dateString = arr[arr.length - 1].createdAt;
        const dateObject = new Date(Date.parse(dateString));
        const dateMilliseconds = dateObject.getTime();
        setTime(dateMilliseconds);
    }

    console.log('lastRate', lastRate);
    console.log('lastEmission', lastEmission);
    console.log('lastAir', lastAir);

    const [isDragging, setIsDragging] = useState(false);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const num = lastAir;

    if(num == 0) {
        setAngle(num + 212)
    } else if (num <= 5) {
        setAngle(num + 220)
    } else if (num <= 10) {
        setAngle(num + 230)
    } else if (num <= 15) {
        setAngle(num + 239)
    } else if (num <= 20) {
        setAngle(num + 250)
    } else if (num <= 25) {
        setAngle(num + 263)
    } else if (num <= 30) {
        setAngle(num + 275)
    } else if (num <= 35) {
        setAngle(num + 282)
    } else if (num <= 40) {
        setAngle(num + 295)
    } else if (num <= 45) {
        setAngle(num + 305)
    } else if (num <= 50) {
        setAngle(num + 312)
    } else if (num <= 55) {
        setAngle(num + 320)
    } else if (num <= 60) {
        setAngle(num + 330)
    } else if (num <= 65) {
        setAngle(num + 340)
    } else if (num <= 70) {
        setAngle(num + 348)
    } else if (num <= 75) {
        setAngle(num + 355)
    } else if (num <= 80) {
        setAngle(num + 368)
    } else if (num <= 85) {
        setAngle(num + 380)
    } else if (num <= 90) {
        setAngle(num + 388)
    } else if (num <= 95) {
        setAngle(num + 395)
    } else if (num <= 100) {
        setAngle(num + 405)
    } 
    console.log('number',num);
  },[lastAir])

    return (
        <div>
            <div className='calc__wraper'>
                <div className='background'>
                    <AnimWave/>
                </div>
                <div className='calc__head'>
                    <div className='calc__head-item site__name'>
                        <img src='/img/miniLogo.svg' />
                    </div>
                    <div className='calc__head-item contact'>Contact us</div>
                </div>
                <div className='content__wraper'>
                    <div className='logo'>
                        <img src='/img/logo.svg' />
                    </div>
                    <div className='calc__wrap'>
                        <div className='calc__wrap_row'>
                            <div className='calc__wrap-item rate'>
                                <h2>Rate</h2>
                                <ul>
                                    <div>{lastRate &&
                                        <Counter val={lastRate} time={0.1}/>
                                    }</div>
                                </ul>
                            </div>
                            <div className='calc__wrap-item emission'>
                                <h2>Emission</h2>
                                <ul>
                                    <div>{lastEmission &&
                                        <Counter val={lastEmission} time={0.1}/>}
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className='calc__wrap_row'>
                            <div className='calc__wrap-item air'>
                                <h2>Air</h2>
                                <AirCounter angle={angle} lastAir={lastAir}/>
                                </div>
                            <div className='calc__wrap-item balance'>
                                <h2>Balance</h2>
                                <ul>
                                    <CounterYear firstValue={Number(totalbalance)} val={Number(totalbalanceHeader)} time={time} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='calc__footer'>
                    <div className='calc__footer-email'> <img src='/img/email.svg' /> info@daiwo.ai</div>
                    <div className='calc__footer-info'>Neural economic network D.A.I.Wo Ver 1.00</div>
                </div>
            </div>
        </div>
    );
};

export default CalculatePublick;