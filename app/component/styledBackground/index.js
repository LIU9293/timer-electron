import React from 'react';
import TitleArea from 'component/titleArea';
import { AbsWrapper } from 'component/wrapper';
import SectionIndicator from 'component/sectionIndicator';
import {
  Background,
  BackgroundIamge
} from './style';

const BG = require('public/bg1.jpg');

class StyledBackground extends React.PureComponent{
  render(){
    return(
      <AbsWrapper>
        <BackgroundIamge background={BG} />
        <Background currentSection={this.props.currentSection} sectionLength={this.props.sectionLength} />
        <SectionIndicator>
          {this.props.globalConfig[`section_${this.props.currentSection}`].name}
        </SectionIndicator>
        <TitleArea
          globalConfig={this.props.globalConfig}
          player={this.props.player}
          currentSection={this.props.currentSection}
          sectionName={this.props.sectionName}
        />
      </AbsWrapper>
    )
  }
}

export default StyledBackground
