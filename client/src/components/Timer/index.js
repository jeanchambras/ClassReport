import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      start: 0,
      isOn: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }
  componentDidMount(){
      this.startTimer()
  }
  convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    h += d * 24;
    return ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2);
}
  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  
  render() {
    
    
    return(
        <div className="columns has-text-centered">
            <div className="column align-center">
                <button onClick={this.props.onStop} className="button is-danger is-rounded">stop</button>
            </div>
            <div className="column align-center">
                <h3 className="is-size-2 has-text-white">{this.convertMS(this.state.time)}</h3>
            </div>
        </div>
    )
  }
}

export default Timer;