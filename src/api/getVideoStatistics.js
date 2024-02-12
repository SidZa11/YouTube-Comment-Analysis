async function getVideoStatistics(video_id, api_key) {

    var video_stat_url = `https://www.googleapis.com/youtube/v3/videos?id=${video_id}&part=statistics&key=${api_key}`
    var get_stat = await fetch(video_stat_url);
    var result = await get_stat.json();
    var stat = result["items"][0]
    
    return stat;
}

export default getVideoStatistics
