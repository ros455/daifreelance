import React from 'react';
import '../style/admin.css'
import '../style/style-null.css'
import Table from './Table';

const AdminPanel = () => {
    return (
        <div>
            <div className='admin__wrap'>
                <div className='admin__header'>
                    <button className='btn back'>
                        <img src='/img/arrow.svg'/>
                        Back
                        </button>
                    <div className='logo'>
                    <img className='logo_admin' src='/img/logo.svg' />
                    </div>
                </div>
                <div className='admin__content_wraper'>
                    <div className='content__input'>
                        <div className='content__item rate'>
                            <h2 className='admin__h2'>Rate:</h2>
                            <input type='number' />                       
                        </div>
                        <div className='content__item emission'>
                            <h2 className='admin__h2'>Emission:</h2>
                            <input type='number' /> 
                        </div>
                        <div className='content__item air'>
                            <h2 className='admin__h2'>AIR:</h2>
                            <input type='number' /> 
                            <p>%</p>
                            <button className='btn submit'>Send data</button>
                        </div>
                    </div>
                    <div className='content__history'>
                        <h2 className='admin__h2'>History</h2>
                        <div className='tablet'>
                            <Table/>
                        </div>
                        <div className='pagination'>
                        <button className='btn'> <img src='/img/left-pagination.svg'/>  </button>
                        <button className='btn'> <img src='/img/right-pagination.svg'/> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;