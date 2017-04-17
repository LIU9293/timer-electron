import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  StartButton,
  ChangeSideButton,
  PrevioutSectionButton,
  NextSectionButton,
  StopButton,
  SidebarButton,
} from '../controlButton';
import {
  ControlWrapper,
  NavArea,
  SidebarTrigger,
} from './style';

class StyledControl extends React.PureComponent{
  static propTypes = {
    type: PropTypes.string.isRequired,
    pause: PropTypes.bool.isRequired,
    currentSection: PropTypes.number.isRequired,
    sectionLength: PropTypes.number.isRequired,
  }

  static defaultProps = {
    pause: false,
  }

  render(){
    const { type } = this.props;
    if(type === 'single'){
      return(
        <ControlWrapper>
          <StartButton
            onStart={this.props.onSingleStart}
            onPause={this.props.onSinglePause}
            pause={this.props.pause}
          />
          <StopButton
            onClick={this.props.onSingleStop}
          />
          <SidebarTrigger>
            <SidebarButton onClick={this.props.onSidebarTrigger} />
          </SidebarTrigger>
          <NavArea>
            {
              this.props.currentSection > 1 &&
              <NavLink to={`/timer/${this.props.currentSection - 1}`}>
                <PrevioutSectionButton />
              </NavLink>
            }
            {
              this.props.currentSection < this.props.sectionLength &&
              <NavLink to={`/timer/${this.props.currentSection + 1}`}>
                <NextSectionButton />
              </NavLink>
            }
          </NavArea>
        </ControlWrapper>
      );
    } else {
      return(
        <ControlWrapper>
          <StopButton
            onClick={this.props.onDoubleStop}
          />
          <StartButton
            onStart={this.props.onDoubleStart}
            onPause={this.props.onDoublePause}
            pause={this.props.pause}
          />
          <ChangeSideButton
            onClick={this.props.onChangeSide}
          />
          <SidebarTrigger>
            <SidebarButton onClick={this.props.onSidebarTrigger} />
          </SidebarTrigger>
          <NavArea>
            {
              this.props.currentSection > 1 &&
              <NavLink to={`/timer/${this.props.currentSection - 1}`}>
                <PrevioutSectionButton />
              </NavLink>
            }
            {
              this.props.currentSection < this.props.sectionLength &&
              <NavLink to={`/timer/${this.props.currentSection + 1}`}>
                <NextSectionButton />
              </NavLink>
            }
          </NavArea>
        </ControlWrapper>
      );
    }
  }
}

export default StyledControl;
