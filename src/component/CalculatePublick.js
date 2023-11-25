import AnimWave from '../component/AnimWave'; 
import React, { useState, useEffect } from 'react';
import '../style/calc.css'
import '../style/style-null.css'
import '../style/circule.scss'
import CounterYear from './CounterYear';
import Counter from './Counter';
import AirCounter from './AirCounter';
// import { ReactComponent as MyCurrency } from './mycurrency.svg';
// import { Svg } from 'react-svg';


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
        fetch("https://api.daiwo.ai/getall")
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
    } else if (num <= 5) {
        setAngle(num + 222)
    } else if (num <= 10) {
        setAngle(num + 232)
    } else if (num <= 15) {
        setAngle(num + 240)
    } else if (num <= 20) {
        setAngle(num + 251)
    } else if (num <= 25) {
        setAngle(num + 265)
    } else if (num <= 30) {
        setAngle(num + 275)
    } else if (num <= 35) {
        setAngle(num + 280)
    } else if (num <= 40) {
        setAngle(num + 292)
    } else if (num <= 45) {
        setAngle(num + 305)
    } else if (num <= 50) {
        setAngle(num + 312)
    } else if (num <= 55) {
        setAngle(num + 320)
    } else if (num <= 60) {
        setAngle(num + 330)
    } else if (num <= 65) {
        setAngle(num + 342)
    } else if (num <= 70) {
        setAngle(num + 349)
    } else if (num <= 75) {
        setAngle(num + 358)
    } else if (num <= 80) {
        setAngle(num + 370)
    } else if (num <= 85) {
        setAngle(num + 382)
    } else if (num <= 90) {
        setAngle(num + 389)
    } else if (num <= 95) {
        setAngle(num + 395)
    } else if (num <= 100) {
        setAngle(num + 405)
    }
  },[lastAir])

  const handleEmail = () => {
    window.location.href='mailto:info@daiwo.ai'
  }
  
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
                    <div onClick={handleEmail} className='calc__head-item contact'>Contacte me</div>
                </div>
                <div className='content__wraper'>
                    <div className='logo'>
                        <img src='/img/logo.svg' />
                    </div>
                    <div className='calc__wrap'>
                        <div className='calc__wrap_row'>
                            <div className='calc__wrap-item rate'>
                                <div className='price_and_button__wrap'>
                                <h2>Price</h2>
                                <div className='price_button__wrap'>
                                    <button className='button_buy'>Buy</button>
                                    <button className='button_sell'>Sell</button>
                                </div>
                                </div>
                                <ul>
                                <div className='display_currency__wrap'>
                                    <p className='currency_text'>$/</p>
                                    <img src='/mycurrency.svg' className='currency_image'/>
                                </div>
                                    {/* <div className='rate__wraper_numb'>
                                    {lastRate &&
                                        <CounterYear firstValue={Number(lastRate)} val={Number(lastRate * (lastAir / 100) + lastRate)} time={time} isBool={false}/>
                                    }
                                    </div> */}
                                </ul>
                            </div>
                            <div className='calc__wrap-item emission'>
                                <h2>Emission</h2>
                                <ul>
                                <div className='display_currency_emission__wrap'>
                                    <img src='/mycurrency.svg' className='currency_emmision_image'/>
                                </div>
                                    <div className='emission__wraper_numb'>{lastEmission &&
                                        <Counter val={lastEmission}/>}
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className='calc__wrap_row'>
                            <div className='calc__wrap-item air'>
                                <h2 className='air__title'>Yield</h2>
                                <AirCounter angle={angle} lastAir={lastAir}/>
                                </div>
                            <div className='calc__wrap-item balance'>
                                <h2>Balance</h2>
                                <ul>
                                <div className='display_currency__wrap'>
                                    <p className='currency_text'>$</p>
                                </div>
                                    <div className='rate__wraper_numb'>
                                    <CounterYear firstValue={lastRate * lastEmission} val={(lastRate * (lastAir / 100) * lastEmission) + lastRate * lastEmission} time={time} isBool={false}/>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='calc__footer'>
                    <div className='calc__footer-email'> <img src='/img/email.svg' /> info@daiwo.ai</div>
                    <div className='calc__footer-info'>Neural economic network D.A.I.Wo Ver 1.01</div>
                </div>
            </div>
        </div>
    );
};

export default CalculatePublick;