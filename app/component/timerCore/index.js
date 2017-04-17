import React from 'react';
import PropTypes from 'prop-types';

class TimerCore extends React.PureComponent {
  static propTypes = {
    length: PropTypes.number.isRequired,
    warningLength: PropTypes.number,
    onEnd: PropTypes.func,
    onStop: PropTypes.func,
    onGoing: PropTypes.func,
    onStart: PropTypes.func,
    onPause: PropTypes.func,
  }

  static defaultProps = {
    length: 100,
    warningLength: 30,
    onEnd: null,
    onStop: null,
    onGoing: null,
    onStart: null,
    onPause: null,
  }

  componentWillUnmount() {
    if (this.t) {
      clearInterval(this.t);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.length !== this.props.length) {
      this.setState({
        secondsLeft: nextProps.length,
        going: false,
      });
      if (this.t) {
        clearInterval(this.t);
        this.t = null;
      }
    }
  }

  getTime = (sec) => {
    const min = parseInt(sec / 60, 10);
    let seconds = sec - (60 * min);
    if (seconds < 10) {
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
    if (this.state.secondsLeft <= 0) {
      this.onEnd();
      return;
    }
    this.setState({
      secondsLeft: this.state.secondsLeft - 1,
    }, () => {
      if (this.props.onGoing) {
        this.props.onGoing(this.state.secondsLeft);
      }
    });
  }

  start = () => {
    if (this.t) {
      return;
    }
    this.t = setInterval(this.minusOne, 1000);
    this.setState({
      going: true,
    }, this.props.onStart);
  }

  pause = () => {
    if (this.t) {
      clearInterval(this.t);
      this.t = null;
    }
    this.setState({
      going: false,
    }, this.props.onPause);
  }

  stop = () => {
    if (this.t) {
      clearInterval(this.t);
      this.t = null;
    }
    this.setState({
      secondsLeft: this.props.length,
      going: false,
    }, this.props.onStop);
  }

  onEnd = () => {
    if (this.t) {
      clearInterval(this.t);
      this.t = null;
    }
    this.setState({
      going: false,
      secondsLeft: 0,
    }, this.props.onEnd);
  }

  render() {
    const lastTen = this.state.secondsLeft < 10 && this.state.going;
    return (
      <div
        style={this.props.style}
        className={lastTen ? this.props.textClassLast : this.props.textClass}
      >
        {this.getTime(this.state.secondsLeft)}
      </div>
    );
  }
}

export default TimerCore;
