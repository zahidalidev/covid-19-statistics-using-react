import React, { useState, useEffect } from 'react';
import {fetchDailyData} from "../api/indexAPI";
import {Line, Bar} from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);   //setting to state using hooks and providing initial null value 
    
    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length   //if 0 then this will be false
        ?(
            <Line
                data={{
                    labels: dailyData.map(({date}) => date),
                    datasets:[{
                        data: dailyData.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    },{
                        data: dailyData.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true
                    }]
                }}
            />
        ) : null
    )
//barChart is equal to some jsx
    const barChart = (
        confirmed
         ?(
             <Bar 
                data = {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [ 'rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                option = {{
                    legend: {display: true, label: 'recovered' },
                    title: {display: true, text: `Current state in ${country}`},
                }}
             />
         ) : null
    );

    return ( 
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
     );
}
 
export default Chart;