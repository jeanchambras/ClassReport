import React, { Component } from 'react';

import { processHands, processHeads } from '../../api';

import FullscreenEmotion from '../../components/FullscreenEmotion';
import DashBar from '../../components/DashBar';
import VideoFeed from '../../components/VideoFeed';
import Timer from '../../components/Timer'

const getMaxEmotion = (emotions) => {
  let maxEmotion = null;
  for (const emotionName in emotions) {
    if (!maxEmotion || emotions[maxEmotion] < emotions[emotionName]) {
      maxEmotion = emotionName;
    }
  }
  return maxEmotion;
}

class DashboardScreen extends Component {

  state = {
    heads: {},
    hands:{}
  };

  canvas = null;
  blob = null;

  onGotPicture = (imageBitmap) => {

    return new Promise(res => {
      if (!this.canvas) {
        this.canvas = document.createElement('canvas');
      }
      const canvas = this.canvas;
      let w = imageBitmap.width;
      let h = imageBitmap.height;
      canvas.width = w;
      canvas.height = h;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(imageBitmap, 0, 0);
      canvas.toBlob(res, 'image/jpeg');
    })
    .then( blob => {
      this.blob = blob;
      this.videoFeed.startTimer();
    });
  }

  handsTimer = null;
  headsTimer = null;

  componentDidMount(){
    const { onGotNewData } = this.props;

    const repeatHeads = () => {
      if (this.STOP) return;
      if(this.blob){
        processHeads(this.blob).then(heads => { this.headsTimer = setTimeout(repeatHeads, 1000); return heads; })
        .then( (heads)=>{
          onGotNewData(heads);
          console.log(heads); //testheads
          this.setState({
            heads: heads,
            emotion: getMaxEmotion(heads.emotions)
          })
        }).catch(console.error);

      }else{
        this.headsTimer = setTimeout(repeatHeads, 1000);
      }
    }
    this.headsTimer = setTimeout(repeatHeads, 1000);


    const repeatHands = () =>  {
      if (this.STOP) return;
      if(this.blob){
        processHands(this.blob).then(hands => { this.handsTimer = setTimeout(repeatHands, 1000); return hands; })

        .then( (hands)=>{
          console.log(hands); //testheads
          this.setState({
            hands: hands
          })
        }).catch(console.error);
      }else{
        this.handsTimer = setTimeout(repeatHands, 1000);
      }
    }
    this.handsTimer = setTimeout(repeatHands, 1000);

  }


componentWillUnmount() {
  clearInterval(this.headsTimer)
  clearInterval(this.handsTimer)
  this.STOP = true
}




render() {
  const { heads, hands } = this.state;
  return (
    <div className="main">
    <div className="container left">
    <Timer onStop={this.props.onStop}/>
    </div>
    <FullscreenEmotion
    emotion={ this.state.emotion }
    />
    <VideoFeed
    ref={ref => this.videoFeed = ref}
    onGotPicture={this.onGotPicture}
    pictureDelay={500}
    />
    <DashBar
    active={ hands ? true : false }
    peopleCount={ heads && heads.count}
    raisingHand={ hands && hands.count }
    />
    </div>
  );
}

}

export default DashboardScreen;
