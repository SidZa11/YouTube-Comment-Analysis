async function getVideoInformation(video_id, api_key) {
    
    var video_info_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${video_id}&key=${api_key}`;
    var video_info_response = await fetch(video_info_url);
    var result = await video_info_response.json()
    var video_info_data = result['items'][0]

    return video_info_data;
}

export default getVideoInformation