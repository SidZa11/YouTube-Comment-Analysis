
import React, { useState } from 'react'
import Layout from '../components/Layout'
import StepToSearch from '../components/StepToSearch'
import SimpleBarGraph from '../charts/SimpleBarGraph'
import CommentDataContext from '../context/CommentDataContext'
import Statistics from '../components/Statistics'
import VideoInfoContext from '../context/VideoInfoContext'
import VideoStatContext from '../context/VideoStatContext'


const Analytics = () => {

const [commentData, setCommentData] = useState([])
const [videoInfo, setVideoInfo] = useState({})
const [videoStat, setVideoStat] = useState({})

  return (
    <Layout>
        <CommentDataContext.Provider value={{commentData, setCommentData}} >
          <VideoInfoContext.Provider value={{videoInfo, setVideoInfo}}>
            <VideoStatContext.Provider value={{videoStat, setVideoStat}}>
              <StepToSearch/>
              <Statistics />
              <SimpleBarGraph/>
            </VideoStatContext.Provider>
          </VideoInfoContext.Provider>
        </CommentDataContext.Provider>
    </Layout>
  )
}

export default Analytics