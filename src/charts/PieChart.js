import React, { useContext, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import CommentDataContext from '../context/CommentDataContext';

const PieChart = () => {
const {commentData} = useContext(CommentDataContext);
var data = []

if(commentData != null){
var publishedATString = []
var publishedATDate;

commentData.forEach(element => {
publishedATString.push(element.snippet.topLevelComment.snippet.updatedAt);
});
publishedATString = publishedATString.map(res => res.substring(0, res.length - 1))
publishedATDate = publishedATString.map(publishedATDateArray => new Date(publishedATDateArray));
const Year = publishedATDate.filter( arr => arr.getFullYear() === 2024 );
var month = [];
for(var i=0; i<12; i++) { month.push(Year.filter(mnth=> mnth.getMonth() === i))
    data.push(month[i].length);

    }

    }

    var YearData = [{
    data : data,
    }]


    const [series, setSeries] = useState([44, 55, 13, 43, 22,44,55,66,77,88,99,22]);

    useEffect(() => {
    setTimeout(()=>{
      
      setSeries( YearData[0]["data"] );
    }, 3000)
    },[series])

    const options = {
    
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }],
          title:  {
            text: "Monthly Comment Pie Chart"
          }
          

    };

    return (
    <div>
        <div id="PieChart">
            <ReactApexChart options={options} series={series} type="pie" height={350} />
        </div>
        <div id="html-dist-pie"></div>
    </div>
    );
    };

    export default PieChart;
