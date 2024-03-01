
import{
InputGroup,
Input,
InputRightElement,
Button,
} from '@chakra-ui/react'

import { ArrowForwardIcon } from '@chakra-ui/icons';
import getCommentsData from '../api/getCommentsData';
import { useContext } from 'react';
import swal from 'sweetalert'
import CommentDataContext from '../context/CommentDataContext';
import getVideoInformation from '../api/getVideoInformation';
import VideoInfoContext from '../context/VideoInfoContext';
import getVideoStatistics from '../api/getVideoStatistics';
import VideoStatContext from '../context/VideoStatContext';
import RefreshAnalyticContext from '../context/RefreshAnalyticsContext';


const SearchBar = () => {
    const {setCommentData} = useContext(CommentDataContext)
    const{setVideoInfo} = useContext(VideoInfoContext)
    const{setVideoStat} = useContext(VideoStatContext)
    const {setRefreshValue} = useContext(RefreshAnalyticContext)
    var comment_value;
    var info_value;
    var stat_value;
    const fetchData = async (videoId, key) => {
        try {
            info_value = await getVideoInformation(videoId, key)
            setVideoInfo(info_value)

            stat_value = await getVideoStatistics(videoId, key)
            setVideoStat(stat_value)

            comment_value = await getCommentsData(videoId, key);            
            setCommentData(comment_value)

            setRefreshValue(0)
        } catch (error) {
            console.error('Error fetching comments data:', error);
        }
    };
    async function UrlValuehandle(){
        var video_id;
        var url = document.getElementById('url').value;
        if (url.substring(0, 17) === "https://youtu.be/") {
            video_id = url.split("/")[3].substring(0,11);
            var key="AIzaSyAcP4VvLjTcqriI1O93YnaBXz4Tcrsrq3M";
            swal("Good Job", "Request Sent to the Server.", "success")
            await fetchData(video_id, key)
        }
        else{
            return swal ( "Oops" ,  "Something went wrong!" ,  "error" )
        }
    
    }

return (
<InputGroup m={'auto'} w={['80vw', '40vw']}>
    <Input id='url' pr='4.5rem' border={'3px solid'} borderColor={'blueviolet'} size='lg' type="url" placeholder='Enter url'  />
    <InputRightElement>
        <Button rightIcon={<ArrowForwardIcon/>} colorScheme='white' variant='filled' onClick={() => UrlValuehandle()} />
    </InputRightElement>

</InputGroup>
)
}

export default SearchBar
