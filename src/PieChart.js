import React from 'react';
import { Pie } from 'react-chartjs-2';



export default function PiChart(props) {

    if (Object.keys(props.data).length === 0) {
        return (<h2 color="black">
           
        </h2>
        )
    }

    var labelsData = [];
    var countData = [];

    props.data.list.forEach((obj, i) => {
        labelsData[i] = obj.title;
        countData[i] = obj.count;
    })
    

    const chartData = {
        labels: labelsData,
        datasets: [{
            data: countData,
            backgroundColor: [
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                
                
            ],
            hoverBackgroundColor: [
        
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                
            ]
        }]
    };


    return (
        <div style={
            {width: '400px', height:'400px', margin:"0 auto"}
        }>
            <h2>Chart</h2>
            <Pie data={chartData} />
        </div>
    );
}

