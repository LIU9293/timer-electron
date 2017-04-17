import React from 'react';
import PropTypes from 'prop-types';
import { Howl } from 'howler';

const bell1 = require('public/bell1.m4a');
const bell2 = require('public/bell2.m4a');
const bell3 = require('public/bell3.m4a');

class TimerCore extends React.PureComponent{
  static propTypes = {
    length: PropTypes.number.isRequired,
    warningLength: PropTypes.number,
    onEnd: PropTypes.func,
    onStop: PropTypes.func,
    onGoing: PropTypes.func,
    onStart: PropTypes.func,
    onPause: PropTypes.func,
    showTimeAlert: PropTypes.bool,
  }

  static defaultProps = {
    length: 100,
    warningLength: 30,
    onEnd: null,
    onStop: null,
    onGoing: null,
    onStart: null,
    onPause: null,
    showTimeAlert: true,
  }

  componentWillUnmount(){
    if(this.t){
      clearInterval(this.t);
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.length !== this.props.length){
      this.setState({
        secondsLeft: nextProps.length,
        going: false,
      });
      if(this.t){
        clearInterval(this.t);
        this.t = null;
      }
    }
  }

  componentDidMount() {
    this.bell1 = new Howl({src: bell1});
    this.bell2 = new Howl({src: bell2});
    this.bell3 = new Howl({src: bell3});
  }

  getTime = (sec) => {
    const min = parseInt(sec/60, 10);
    let seconds = sec - (60 * min);
    if(seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${min} : ${seconds}`;
  }

  state = {
    going: false,
    secondsLeft: this.props.length,
  }

  t = null

  minusOne = () => {
    if(this.state.secondsLeft <= 0){
      if(this.props.showTimeAlert){
        this.bell2.play();
      }
      this.onEnd();
      return;
    }
    if(this.state.secondsLeft === 31 && this.props.showTimeAlert){
      this.bell1.play();
    }
    if(this.state.secondsLeft === 5 && this.props.showTimeAlert){
      this.bell3.play();
    }
    this.setState({
      secondsLeft: this.state.secondsLeft - 1,
    }, () => {
      if(this.props.onGoing){
        this.props.onGoing(this.state.secondsLeft);
      }
    });
  }

  start = () => {
    if(this.t){
      return;
    }
    this.t = setInterval(this.minusOne, 1000);
    if(this.state.secondsLeft < 5 && this.props.showTimeAlert){
      this.bell3.play();
    }
    this.setState({
      going: true,
    }, this.props.onStart);
  }

  pause = () => {
    if(this.t){
      clearInterval(this.t);
      this.t = null;
    }
    if(this.state.secondsLeft < 5 && this.props.showTimeAlert){
      this.bell3.pause();
    }
    this.setState({
      going: false,
    }, this.props.onPause);
  }

  stop = () => {
    if(this.t){
      clearInterval(this.t);
      this.t = null;
    }
    this.setState({
      secondsLeft: this.props.length,
      going: false,
    }, this.props.onStop);
  }

  onEnd = () => {
    if(this.t){
      clearInterval(this.t);
      this.t = null;
    }
    this.setState({
      going: false,
      secondsLeft: 0,
    }, this.props.onEnd);
  }

  render(){
    const lastTen = this.state.secondsLeft < 6 && this.state.going;
    return(
      <div
        style={this.props.style}
        className={lastTen ? this.props.textClassLast : this.props.textClass }
      >
        {this.getTime(this.state.secondsLeft)}
      </div>
    )
  }
}

export default TimerCore;
