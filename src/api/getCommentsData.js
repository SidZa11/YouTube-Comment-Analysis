const getCommentsData = async (video_id="eoTKAujwUw", api_key) => {

        var comments_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${video_id}&key=${api_key}&`;
        var response = await fetch(comments_url);
        var result = await response.json();
        var comments_data = result["items"];
        console.log("result: ", result);

        while ("nextPageToken" in result && result["nextPageToken"] !== "None") {
          var comments_url_next_page = `${comments_url}&pageToken=${result["nextPageToken"]}`;
          response = await fetch(comments_url_next_page);
          result = await response.json();
          result["items"].forEach(element => {
            comments_data.push(element);
          });
        }
        
  return comments_data ;
};

export default getCommentsData;
