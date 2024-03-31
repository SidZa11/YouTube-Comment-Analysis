const getSentiment = async (comment_arr) => {

    var comments = [];
    comment_arr.forEach((element) => {
      comments.push(element.snippet.topLevelComment.snippet.textOriginal);
    });
  
    const url =
      "http://ec2-54-163-33-201.compute-1.amazonaws.com:8000/predict_batch";
  
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comments: comments }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Comments posted successfully:", data);
        return data
      })
      .catch((error) => {
        console.error("Error posting comments:", error);
      });
  
  };
  
  export default getSentiment;
  