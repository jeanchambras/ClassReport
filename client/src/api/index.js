import getHeads from './heads';
import getHands from './hands';

const processHands = (image) => {

};

const processHeads = (image) => {

  return getHeads(image).then((data) => {

    let heads = {
      count: data.length,
      emotions: {}
    };

    if (data.length <= 0){
      return heads;
    } else {
      let emotions = {};

      for (let i = 0; i < data.length; ++i) {
        const currentEmotions = data[i].faceAttributes.emotion;
        for (const emotionName in currentEmotions) {
          if (!(emotionName in emotions)) {
            emotions[emotionName] = 0; // initialize emotion
          }
          emotions[emotionName] += currentEmotions[emotionName];
        }
      }

      for (const emotionName in emotions) {
        emotions[emotionName] /= heads.count;
      }

      heads.emotions = emotions;

      return heads;

    }
  });

};

export { processHands, processHeads };
