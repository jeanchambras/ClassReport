import getHeads from './heads';


const getImageInfos = (image) => {


  return getHeads(image).then((data) => {

    let response = {
      headsCount: data.length,
      globalEmotions: {}
    };

    if (data.length <= 0){
      return response;
    } else {
      let emotions = {};

      for (let i = 0; i < data.length; ++i) {
        const currentEmotions = data[i].faceAttributes.emotion;
        for (const emotionName in currentEmotions) {
          console.log(emotionName);
          if (!(emotionName in emotions)) {
            emotions[emotionName] = 0; // initialize emotion
          }
          emotions[emotionName] += currentEmotions[emotionName];
        }
      }

      for (const emotionName in emotions) {
        emotions[emotionName] /= response.headsCount;
      }

      response.globalEmotions = emotions;

      return response;

    }
  });


}

const getHands = (image) => {

}


export default getImageInfos;
