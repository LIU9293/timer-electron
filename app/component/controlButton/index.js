import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import {
  ControlButton
} from './style';

const iconStyle = {
  fontSize: '40px',
  color: '#fff',
  margin: '10px'
}

function StartButton(props){
  return(
    <ControlButton onClick={props.pause ? props.onPause : props.onStart}>
      <Icon
        type={props.pause ? 'pause' : 'right'}
        style={iconStyle}
      />
    </ControlButton>
  )
}

StartButton.propTypes = {
  pause: PropTypes.bool,
  onPause: PropTypes.func,
  onStart: PropTypes.func,
}

StartButton.defaultProps = {
  pause: false,
  onPause: null,
  onStart: null,
}

function ChangeSideButton(props){
  return(
    <ControlButton {...props}>
      <Icon
        type={'swap'}
        style={iconStyle}
      />
    </ControlButton>
  )
}

function PrevioutSectionButton(props){
  return(
    <ControlButton {...props}>
      <Icon
        type={'arrow-left'}
        style={iconStyle}
      />
    </ControlButton>
  )
}

function NextSectionButton(props){
  return(
    <ControlButton {...props}>
      <Icon
        type={'arrow-right'}
        style={iconStyle}
      />
    </ControlButton>
  )
}

function StopButton(props){
  return(
    <ControlButton {...props}>
      <Icon
        type={'reload'}
        style={iconStyle}
      />
    </ControlButton>
  )
}

function SidebarButton(props){
  return(
    <ControlButton {...props}>
      <Icon
        type={'bars'}
        style={iconStyle}
      />
    </ControlButton>
  )
}

export {
  StartButton,
  ChangeSideButton,
  NextSectionButton,
  PrevioutSectionButton,
  StopButton,
  SidebarButton,
};
