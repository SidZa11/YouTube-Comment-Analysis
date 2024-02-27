import React, { useContext, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import CommentDataContext from '../context/CommentDataContext';
import RefreshAnalyticContext from '../context/RefreshAnalyticsContext';

const colors = ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
    '#f48024', '#69d2e7'
];

var words = [];
var weights = [];
var wordArray;
const WordCountGraph = () => {
  const [series, setSeries] = useState([{name: 'Frequency', data: [121, 22, 28] }]);
  const [category] = useState([
  ['zakir'],
  ['shakir'],
  ['sabir'],
  
  ])

const {commentData} = useContext(CommentDataContext);
const {refreshValue, setRefreshValue} = useContext(RefreshAnalyticContext);

if(refreshValue == 0){

    const stopWords = [
        'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours',
        'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers',
        'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves',
        'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are',
        'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does',
        'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until',
        'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into',
        'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down',
        'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here',
        'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more',
        'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so',
        'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now', ''
    ];
      
var comments = []
commentData.forEach(element => {
comments.push(element.snippet.topLevelComment.snippet.textOriginal);
});
console.log("comments", comments)
const wordCount = {};
  comments.forEach(comment => {

    if (typeof comment !== 'string') return;
    const words = comment.toLowerCase().split(/\s+/);
    console.log('words', words)
    const filteredWords = words.filter(word => !stopWords.includes(word)); // Filter out stop words

    filteredWords.forEach(word => {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    });
  });
console.log(wordCount)
  // Convert word count object to array of objects
   wordArray = Object.keys(wordCount).map(word => ({
    text: word,
    weight: wordCount[word] // Using 'weight' instead of 'size'
  }));
  console.log("wordArray", wordArray)

  wordArray.sort((a, b) => parseInt(b.weight) - parseInt(a.weight));
  console.log("wordArray1", wordArray)

words = []
weights = []

for (let index = 0; index < 10; index++) {
  words.push(wordArray[index].text)
  weights.push(wordArray[index].weight)
  console.log(index)
}

setRefreshValue(1)

}

useEffect(()=>{

  setSeries([{name: 'Frequency', data : weights}]) 
  setOptions(prevOptions => ({
  ...prevOptions,
  xaxis: {
  ...prevOptions.xaxis,
  categories: words
  }
  }));
},[words, weights])

    const [options, setOptions] = useState({
    chart: {
    type: 'bar',
    height: 380
    },
    plotOptions: {
    bar: {
    barHeight: '100%',
    distributed: true,
    horizontal: true,
    dataLabels: {
    position: 'bottom'
    },
    }
    },
    colors: colors,
    dataLabels: {
    enabled: true,
    textAnchor: 'start',
    style: {
    colors: ['#fff']
    },
    formatter: function (val, opt) {
    return opt.w.globals.labels[opt.dataPointIndex] + ": " + val
    },
    offsetX: 0,
    dropShadow: {
    enabled: true
    }
    },
    stroke: {
    width: 1,
    colors: ['#fff']
    },
    xaxis: {
    categories: category,
    },
    yaxis: {
    labels: {
    show: false
    }
    },
    title: {
    text: 'Custom DataLabels',
    align: 'center',
    floating: true,
    },
    subtitle: {
    text: 'Category Names as DataLabels inside bars',
    align: 'center',
    },
    tooltip: {
    theme: 'dark',
    x: {
    show: true
    },
    y: {
    title: {
    formatter: function () {

    }
    }
    }
    }});


    return (
    <div>
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
        <div id="html-dist"></div>
    </div>
    );

}

    export default WordCountGraph;
