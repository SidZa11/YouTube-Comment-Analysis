
import React, { useState } from 'react'
import Layout from '../components/Layout'
import StepToSearch from '../components/StepToSearch'
import SimpleBarGraph from '../charts/SimpleBarGraph'
import CommentDataContext from '../context/CommentDataContext'
import Statistics from '../components/Statistics'
import VideoInfoContext from '../context/VideoInfoContext'
import VideoStatContext from '../context/VideoStatContext'
import WordCountGraph from '../charts/WordCountGraph'
import RefreshAnalyticContext from '../context/RefreshAnalyticsContext'
import PieChart from '../charts/PieChart'


const Analytics = () => {

const [commentData, setCommentData] = useState([])
const [videoInfo, setVideoInfo] = useState({})
const [videoStat, setVideoStat] = useState({})
const [refreshValue, setRefreshValue] = useState(1)

  return (
    <Layout>
        <CommentDataContext.Provider value={{commentData, setCommentData}} >
          <VideoInfoContext.Provider value={{videoInfo, setVideoInfo}}>
            <VideoStatContext.Provider value={{videoStat, setVideoStat}}>
              <RefreshAnalyticContext.Provider value={{refreshValue, setRefreshValue}}>
                <StepToSearch/>
                <Statistics />
                <PieChart />
                <WordCountGraph />
              </RefreshAnalyticContext.Provider>
            </VideoStatContext.Provider>
          </VideoInfoContext.Provider>
        </CommentDataContext.Provider>
    </Layout>
  )
}

export default Analytics