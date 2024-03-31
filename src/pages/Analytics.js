import React, { useState } from 'react'
import Layout from '../components/Layout'
import StepToSearch from '../components/StepToSearch'
import CommentDataContext from '../context/CommentDataContext'
import Statistics from '../components/Statistics'
import VideoInfoContext from '../context/VideoInfoContext'
import VideoStatContext from '../context/VideoStatContext'
import WordCountGraph from '../charts/WordCountGraph'
import RefreshAnalyticContext from '../context/RefreshAnalyticsContext'
import SentimentDataContext from '../context/SentimentDataContext'
import PieChart from '../charts/PieChart'


const Analytics = () => {

const [commentData, setCommentData] = useState([])
const [videoInfo, setVideoInfo] = useState({})
const [videoStat, setVideoStat] = useState({})
const [sentimentData, setSentimentData] = useState([])
const [refreshValue, setRefreshValue] = useState(1)

return (
<Layout>
    <CommentDataContext.Provider value={{ commentData, setCommentData }}>
        <VideoInfoContext.Provider value={{ videoInfo, setVideoInfo }}>
            <VideoStatContext.Provider value={{ videoStat, setVideoStat }}>
                <RefreshAnalyticContext.Provider value={{ refreshValue, setRefreshValue }}>
                    <SentimentDataContext.Provider value={{sentimentData, setSentimentData}}>
                        <StepToSearch />
                        <Statistics />
                        <PieChart />
                    </SentimentDataContext.Provider>
                    <WordCountGraph />
                </RefreshAnalyticContext.Provider>
            </VideoStatContext.Provider>
        </VideoInfoContext.Provider>
    </CommentDataContext.Provider>
</Layout>
)
}

export default Analytics
