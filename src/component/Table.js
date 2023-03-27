import React,{useState, useEffect} from 'react';
import '../style/table.scss';

const Table = ({currentItems, totalBalance}) => {
    return (
      <div className="wrap_table">
        <div className="block_table">
          <div className="table_item">
            <h3 className="table_item-date">Date</h3>
            <h3 className="table_item-emision">Emission</h3>
            <h3 className="table_item-rate">Rate</h3>
            <h3 className="table_item-air">Air</h3>
            <h3 className="table_item-balance">Balance {totalBalance}</h3>
          </div>
          {currentItems &&
            currentItems.map((el) => (
              <div key={el._id} className="table_item">
                <p className="table_item-p table_item-p--border">
                  {el.createdAt.slice(0, 10)}
                </p>
                <p className="table_item-p table_item-p--border">{el.emission}</p>
                <p className="table_item-p table_item-p--border">{el.rate}</p>
                <p className="table_item-p table_item-p--border">{el.air * 100}</p>
                <p className="table_item-p table_item-balance">{el?.balans}</p>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Table;