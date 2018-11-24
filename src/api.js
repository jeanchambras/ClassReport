import getHeads from './api/heads';


const getImageInfos = (image) => {


  return getHeads(image).then( (data)=>{

    var response = {
      "headsCount":data.length,
      "emotion": {
        "anger": 0,
        "contempt": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0,
        "neutral": 0,
        "sadness": 0,
        "surprise": 0
      }
    }


    if(data.length===0){
      // Return response for imager without any heads
      return response;
    }else{
      let emotions = new Array(8);

      for(var i = 0; i < data.length; i++){

        // Increment emotions data
        emotions[0] += data[i].emotion.anger;
        emotions[1] += data[i].emotion.contempt;
        emotions[2] += data[i].emotion.disgust;
        emotions[3] += data[i].emotion.fear;
        emotions[4] += data[i].emotion.happiness;
        emotions[5] += data[i].emotion.neutral;
        emotions[6] += data[i].emotion.sadness;
        emotions[7] += data[i].emotion.surprise;
      }

      // Compute average of emotions
      response.anger = emotions[0]/response.headsCount;
      response.contempt = emotions[1]/response.headsCount;
      response.disgust = emotions[2]/response.headsCount;
      response.fear = emotions[3]/response.headsCount;
      response.happiness = emotions[4]/response.headsCount;
      response.neutral = emotions[5]/response.headsCount;
      response.sadness = emotions[6]/response.headsCount;
      response.surprise = emotions[7]/response.headsCount;

      // Return response heads count + emotions average
      return response;

    }
  });


}

const getHands = (image) => {

}


export default getImageInfos;
