import AnimWave from '../component/AnimWave'; 
import React, { useState, useEffect } from 'react';
import '../style/calc.css'
import '../style/style-null.css'
import CounterYear from './CounterYear';
import Counter from './Counter';


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
                                        <Counter val={lastRate} time={15}/>
                                    }</div>
                                </ul>
                            </div>
                            <div className='calc__wrap-item emission'>
                                <h2>Emission</h2>
                                <ul>
                                    <div>{lastEmission &&
                                        <Counter val={lastEmission} time={15}/>}
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className='calc__wrap_row'>
                            <div className='calc__wrap-item air'>
                                <h2>Air</h2>
                                <div className='air__speed'>
                                    <div className='back__big-circle'></div>
                                    <div className='eclipse-gradient'></div>
                                    <div className='eclipse-gradient-second'></div>
                                    <div className='eclipse-speed'></div>
                                    <div className='debug'>
                                        {lastAir && lastAir}%
                                    </div>
                                    <div className='circle'>
                                        <div className='dot'></div>
                                        <div className='back__small-circle'></div>
                                    </div>
                                </div>
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