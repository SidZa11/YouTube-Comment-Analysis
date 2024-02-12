import React, { useContext, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import CommentDataContext from '../context/CommentDataContext';

const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];

const SimpleBarGraph = () => {
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
    category : [['Jan'],['Feb'],['Mar'],['Apr'],['May'],['Jun'],['Jul'],['Aug'],['Sep'],['Oct'],['Nov'],['Dec']]
    }]


    const [series, setSeries] = useState([{ data: [121, 22, 28] }]);
    const [category] = useState([
    ['zakir'],
    ['shakir'],
    ['sabir'],

    ])
    useEffect(() => {

    setTimeout(() => {

    setSeries([{ data : YearData[0]["data"]}])
    setOptions(prevOptions => ({
    ...prevOptions,
    xaxis: {
    ...prevOptions.xaxis,
    categories: YearData[0]["category"]
    }
    }));
    }, 3000);
    })

    const [options, setOptions] = useState({
    chart: {
    height: 350,
    type: 'bar',
    events: {
    click: function (chart, w, e) {
    // console.log(chart, w, e)
    }
    }
    },
    colors: colors,
    plotOptions: {
    bar: {
    // columnWidth: '45%',
    distributed: true,
    borderRadius: 4,
    horizontal: true,
    }
    },
    dataLabels: {
    enabled: true
    },
    legend: {
    show: true
    },
    xaxis: {
    categories: category,
    labels: {
    style: {
    colors: colors,
    fontSize: '12px',
    }
    }
    },
    });

    return (
    <div>
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
        <div id="html-dist"></div>
    </div>
    );
    };

    export default SimpleBarGraph;
