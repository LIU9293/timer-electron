import React from 'react';
import PropTypes from 'prop-types';
import StyledTimer from 'component/styledTimer';
import {
  DoubleTimerWrapper
} from './style';

class DoubleTimer extends React.PureComponent{
  static propTypes = {
    config: PropTypes.object.isRequired,
    onFirstEnd: PropTypes.func,
    onSecondEnd: PropTypes.func,
  }

  state = {
    side: this.props.config.start
  };
  going = false;
  timer = {};

  start = () => {
    this.timer[this.state.side].timerCore.start();
    this.going = true;
  }

  pause = () => {
    this.timer[this.state.side].timerCore.pause();
    this.going = false;
  }

  stop = () => {
    this.timer.positive.timerCore.stop();
    this.timer.negative.timerCore.stop();
    this.going = false;
  }

  changeSide = () => {
    if(this.going){
      if(this.state.side === 'positive'){
        this.timer.positive.timerCore.pause();
        this.timer.negative.timerCore.start();
        this.setState({side: 'negative'});
      } else {
        this.timer.negative.timerCore.pause();
        this.timer.positive.timerCore.start();
        this.setState({side: 'positive'});
      }
    } else {
      if(this.state.side === 'positive'){
        this.setState({side: 'negative'});
      } else {
        this.setState({side: 'positive'});
      }
    }
  }

  onFirstEnd = (side) => {
    if(side === 'positive'){
      this.timer.negative.timerCore.start();
    } else {
      this.timer.positive.timerCore.start();
    }
    if(this.props.onFirstEnd){
      this.props.onFirstEnd();
    }
  }

  onSecondEnd = () => {
    this.going = false;
    if(this.props.onSecondEnd){
      this.props.onSecondEnd();
    }
  }

  onEnd = (side) => {
    if(side === 'positive'){
      if(this.timer.negative.timerCore.state.secondsLeft > 0){
        this.onFirstEnd('positive');
      } else {
        this.onSecondEnd();
      }
    } else {
      if(this.timer.positive.timerCore.state.secondsLeft > 0){
        this.onFirstEnd('negative');
      } else {
        this.onSecondEnd();
      }
    }
  }

  render(){
    const { limit } = this.props.config;
    return(
      <DoubleTimerWrapper>
        <StyledTimer
          ref={timer => this.timer.positive = timer}
          onEnd={() => this.onEnd('positive')}
          length={limit.positive}
          highlight={this.state.side === 'positive'}
        />
        <StyledTimer
          ref={timer => this.timer.negative = timer}
          onEnd={() => this.onEnd('negative')}
          length={limit.negative}
          highlight={this.state.side === 'negative'}
        />
      </DoubleTimerWrapper>
    );
  }
}

export default DoubleTimer;
