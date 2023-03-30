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
    const [totalbalanceFinal, setTotalbalanceFinal] = useState(0);
    const [angle, setAngle] = useState(0);

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
            setTotalbalanceFinal(totalSumHeader.toFixed(0))

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

  useEffect(() => {
    const num = lastAir;

    if(num == 0) {
        setAngle(num + 215)
    } else if (num <= 3) {
        setAngle(num + 225)
    } else if (num <= 5) {
        setAngle(num + 235)
    } else if (num <= 8) {
        setAngle(num + 245)
    } else if (num <= 10) {
        setAngle(num + 259)
    } else if (num <= 13) {
        setAngle(num + 270)
    } else if (num <= 15) {
        setAngle(num + 286)
    } else if (num <= 18) {
        setAngle(num + 297)
    } else if (num <= 20) {
        setAngle(num + 310)
    } else if (num <= 23) {
        setAngle(num + 320)
    } else if (num <= 25) {
        setAngle(num + 336)
    } else if (num <= 28) {
        setAngle(num + 345)
    } else if (num <= 30) {
        setAngle(num + 360)
    } else if (num <= 33) {
        setAngle(num + 375)
    } else if (num <= 35) {
        setAngle(num + 383)
    } else if (num <= 38) {
        setAngle(num + 400)
    } else if (num <= 40) {
        setAngle(num + 412)
    } else if (num <= 43) {
        setAngle(num + 425)
    } else if (num <= 45) {
        setAngle(num + 435)
    } else if (num <= 48) {
        setAngle(num + 445)
    } else if (num <= 50) {
        setAngle(num + 457)
    }
  },[lastAir])

  const handleEmail = () => {
    window.location.href='mailto:info@daiwo.ai'
  }

  console.log('lastRate',lastRate * (lastAir / 100) + lastRate);

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
                    <div onClick={handleEmail} className='calc__head-item contact'>Contact us</div>
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
                                        <CounterYear firstValue={Number(lastRate)} val={Number(lastRate * (lastAir / 100) + lastRate)} time={time} isBool={false}/>
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
                                    <CounterYear firstValue={Number(totalbalance + (lastRate * lastEmission))} val={Number(totalbalanceFinal)} time={time} isBool={true}/>
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