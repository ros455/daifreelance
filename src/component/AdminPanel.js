import React, { useState, useEffect } from "react";
import "../style/admin.css";
import "../style/style-null.css";
import Table from "./Table";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {

  const [emission, setEmission] = useState(0);
  const [rate, setRate] = useState(0);
  const [air, setAir] = useState(0);
  const [allData, setAllData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBalance, setTotalBalance] = useState(0);
  const itemsPerPage = 15;

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.daiwo.ai/getall")
      .then((res) => res.json())
      .then((res) => setAllData(res.reverse()));
  }, []);

  useEffect(() => {
    if(allData.length != 0) {
        let totalSum = 0;
        allData.forEach((item) => {
            totalSum = item.balans + totalSum
        })
        setTotalBalance(totalSum.toFixed(0))

    }
},[allData])

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allData.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = () => {
    fetch('https://api.daiwo.ai/create', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "emission": emission,
        "rate": rate,
        "air": air
      })
    });

    setTimeout(() => {
      window.location.reload();
    }, 1000)
  }

  const handleAirFunc = (e) => {
    const airInFunc = e.target.value;
    if(airInFunc > 100) {
      setAir(1);
      return
    }

    const airInProcent = airInFunc / 100;
    setAir(airInProcent);
  }

  const handleNavigate = () => {
    navigate('/');
  }


  return (
    <div>
      <div className="admin__wrap">
        <div className="admin__header">
          <button className="btn back" onClick={handleNavigate}>
            <img src="/img/arrow.svg" />
            Back
          </button>
          <div className="logo">
            <img className="logo_admin" src="/img/logo.svg" />
          </div>
        </div>
        <div className="admin__content_wraper">
          <div className="content__input">
            <div className="content__item rate">
              <h2 className="admin__h2">Price:</h2>
              <input type="number" onChange={(e) => setRate(e.target.value)} />
            </div>
            <div className="content__item emission">
              <h2 className="admin__h2">Emission:</h2>
              <input type="number" onChange={(e) => setEmission(e.target.value)} />
            </div>
            <div className="content__item air">
              <h2 className="admin__h2">Yield:</h2>
              <input type="number" onChange={handleAirFunc} />
              <p>%</p>
              <button className="btn submit" onClick={handleSubmit}>Send data</button>
            </div>
          </div>
          <div className="content__history">
            <h2 className="admin__h2">History</h2>
            <div className="tablet">
              <Table currentItems={currentItems} totalBalance={totalBalance}/>
            </div>
            <div className="pagination">
              <button className="btn"
                onClick={handlePrev}
                disabled={currentPage === 1}>
                {" "}
                <img src="/img/left-pagination.svg" />{" "}
              </button>
              <button className="btn"
                onClick={handleNext}
                disabled={currentPage === pageNumbers.length}>
                {" "}
                <img src="/img/right-pagination.svg" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
