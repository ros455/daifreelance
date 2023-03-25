import React,{useState, useEffect} from 'react';
import '../style/table.scss';
// import Counter from './Counter';

const Table = () => {
    const [emission, setEmission] = useState(0);
    const [rate, setRate] = useState(0);
    const [air, setAir] = useState(0);
    const [allData, setAllData] = useState([]);
    const [totalbalanceHeader, setTotalbalanceHeader] = useState(0);
    const [totalbalance, setTotalbalance] = useState(0);
    const [lastItem, setLastItem] = useState(0);
    const [timeLastPost, setTimeLastPost] = useState(0);
    const [time, setTime] = useState(0);
    
    useEffect(() => {
        fetch('http://localhost:4444/getall')
        .then((res) => res.json())
        .then((res) => setAllData(res))
    },[])

    useEffect(() => {
        if(allData.length != 0) {
            let totalSumHeader = 0;
            let totalSum = 0;
            allData.forEach((item) => {
                totalSumHeader = item.balans + totalSumHeader
            })
            setTotalbalanceHeader(totalSumHeader.toFixed(0))

            for(let i = 0; i < allData.length -1; i++) {
                totalSum = allData[i].balans + totalSum

            }
            setTotalbalance(totalSum.toFixed(0));
            returnLastItem(allData)
        }
    },[allData])


    const handleSubmit = () => {
        fetch('http://localhost:4444/create',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "emission": emission,
                "rate": rate,
                "air":air
            })
        });

        setTimeout(() => {
            window.location.reload();
        },1000)
    }

    console.log('totalbalance',totalbalance);

    const returnLastItem = (arr) => {
        setLastItem((arr[arr.length - 1].balans))
        const dateString = arr[arr.length - 1].createdAt;
        const dateObject = new Date(Date.parse(dateString));
        const dateMilliseconds = dateObject.getTime();
        setTime(dateMilliseconds);
    }
    
    console.log('timeLastPost',timeLastPost);


    return (
        <>
            <div className='wrap_table'>
            <div className='block_table'>
            <div className='table_item'>
                        <h3 className='table_item-date' >Date</h3>
                        <h3 className='table_item-emision' >Emission</h3>
                        <h3 className='table_item-rate' >Rate</h3>
                        <h3 className='table_item-air' >Air</h3>
                        <h3 className='table_item-balance' >Balanse {totalbalanceHeader}</h3>
                    </div>
                {allData && 
                allData.map((el) => (
                    <div key={el._id} className='table_item'>
                        <p className='table_item-p table_item-p--border' >{el.createdAt.slice(0, 10)}</p>
                        <p className='table_item-p table_item-p--border' >{el.emission}</p>
                        <p className='table_item-p table_item-p--border' >{el.rate}</p>
                        <p className='table_item-p table_item-p--border' >{el.air}</p>
                        <p className='table_item-p' >{el?.balans}</p>
                    </div>
                ))}
            </div>
            {/* <div className='table_button_block'>
                <button>Left</button>
                <button>Right</button>
            </div> */}
        </div>
        {totalbalance != 0 &&
        // <Counter firstValue={Number(totalbalance)} val={Number(totalbalanceHeader)} time={time}/>
        <></>
        }
        {/* <h1>{totalbalance}</h1> */}
        </>
    );
};

export default Table;