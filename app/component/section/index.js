import React from 'react';
import PropTypes from 'prop-types';
import DoubleTimer from 'component/doubleTimer';
import SingleTimer from 'component/styledTimer';
import StyledBackground from 'component/styledBackground';
import StyledControl from "component/styledControl";
import {
  Wrapper
} from './style';

class Section extends React.PureComponent{
  static propTypes = {
    type: PropTypes.oneOf(['single', 'double']).isRequired,
    globalConfig: PropTypes.object.isRequired,
    currentSection: PropTypes.number.isRequired,
    sectionLength: PropTypes.number.isRequired,
    onSidebarTrigger: PropTypes.func
  }

  state = {
    pause: false,
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentSection !== this.props.currentSection && this.state.pause){
      this.setState({
        pause: false
      });
    }
  }

  onDoubleStart = () => {
    this.doubleTimer.start();
    this.setState({
      pause: true
    });
  }

  onDoublePause = () => {
    this.doubleTimer.pause();
    this.setState({
      pause: false
    });
  }

  onDoubleStop = () => {
    this.doubleTimer.stop();
    if(this.state.pause){
      this.setState({
        pause: false
      });
    }
  }

  onChangeSide = () => {
    this.doubleTimer.changeSide();
  }

  onSingleStart = () => {
    this.singleTimer.timerCore.start();
    this.setState({
      pause: true
    });
  }

  onSinglePause = () => {
    this.singleTimer.timerCore.pause();
    this.setState({
      pause: false
    });
  }

  onSingleStop = () => {
    this.singleTimer.timerCore.stop();
    if(this.state.pause){
      this.setState({
        pause: false
      });
    }
  }

  onSingleEnd = () => {
    this.setState({
      pause: false
    });
  }

  render(){
    const { type } = this.props;
    return(
      <Wrapper>
        <StyledBackground
          globalConfig={this.props.globalConfig}
          player={this.props.player}
          currentSection={this.props.currentSection}
          sectionName={this.props.sectionName}
          sectionLength={this.props.sectionLength}
        />
        {
          type === 'single'
          ?  <SingleTimer
                ref={timer => this.singleTimer = timer}
                length={this.props.config.limit}
                highlight={this.state.pause}
                onEnd={this.onSingleEnd}
                currentSection={this.props.currentSection}
             />
          :  <DoubleTimer
                ref={timer => this.doubleTimer = timer}
                config={this.props.config}
                currentSection={this.props.currentSection}
             />
        }
        <StyledControl
          type={type}
          pause={this.state.pause}
          onSingleStart={this.onSingleStart}
          onSinglePause={this.onSinglePause}
          onSingleStop={this.onSingleStop}
          onSidebarTrigger={this.props.onSidebarTrigger}
          onDoubleStart={this.onDoubleStart}
          onDoublePause={this.onDoublePause}
          onDoubleStop={this.onDoubleStop}
          onChangeSide={this.onChangeSide}
          currentSection={this.props.currentSection}
          sectionLength={this.props.sectionLength}
        />
      </Wrapper>
    )
  }
}

export default Section;
