import React from 'react';
import TitleArea from 'component/titleArea';
import { AbsWrapper } from 'component/wrapper';
import {
  Background
} from './style';

class StyledBackground extends React.PureComponent {
  render() {
    return (
      <AbsWrapper>
        <Background />
        <TitleArea
          globalConfig={this.props.globalConfig}
          player={this.props.player}
          currentSection={this.props.currentSection}
        />
      </AbsWrapper>
    );
  }
}

export default StyledBackground;
