import React, {useState,useEffect} from 'react';

const CovidTracker = () => {
    const [data,setData] = useState([]);
    const getCovid = async ()=>{
const res = await fetch('https://data.covid19india.org/data.json');
const actualData = await res.json();
console.log(actualData.statewise);
setData(actualData.statewise[0]);

    }
    useEffect(() => {
        
       getCovid();
    }, [])
    return (
        <>
        <div className="text-center big">
        <h2>🔴 LIVE </h2>
           <h2>COVID-19 CORONOVIRUS TRACKER</h2>
           <div className="box">
               <ul>
                   <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>OUR</span> COUNTRY</p>
                        <p className="card_total card_small"> 🧡🤍💚</p>
                        <p >INDIA</p>
                    </div>
                </div>
   
                   </li>
                   <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>💉TOTAL</span> RECOVERED 💊</p>
                        <p className="card_total card_small">{data.recovered}</p>
                    </div>
                </div>
   
                   </li>
                   <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>🩺TOTAL</span> CONFIRMED 🚑</p>
                        <p className="card_total card_small">{data.confirmed}</p>
                    </div>
                </div>
   
                   </li>
                   <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>🛌TOTAL</span> DEATH🛌</p>
                        <p className="card_total card_small">{data.deaths}</p>
                    </div>
                </div>
   
                   </li>
                   <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>⏳TOTAL</span> ACTIVE⏳</p>
                        <p className="card_total card_small">{data.active}</p>
                    </div>
                </div>
   
                   </li>
                   <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className="card_name"><span>⏰LAST</span> UPDATED⏰</p>
                        <p className="card_total card_small">{data.lastupdatedtime}</p>
                    </div>
                </div>
   
                   </li>
               
               </ul>
           </div> 
        </div>
       
        </>
    )
}

export default CovidTracker;
