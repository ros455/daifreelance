import React, {useState} from 'react';
import AnimWave from '../component/AnimWave'; 
import '../style/calc.css'
import '../style/style-null.css'



const CalculatePublick = () => {



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
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <p>,</p>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                </ul>
                            </div>
                            <div className='calc__wrap-item emission'>
                                <h2>Emission</h2>
                                <ul>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <p>,</p>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
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
                                    <div className='debug'>0</div>
                                    <div className='circle'>
                                    <div className='dot'></div>
                                    <div className='back__small-circle'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='calc__wrap-item balance'>
                                <h2>Balance</h2>
                                <ul>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <p>,</p>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
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