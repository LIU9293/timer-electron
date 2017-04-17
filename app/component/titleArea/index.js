import React from 'react';
import wave from 'public/waves.svg';
import {
  TitleAreaWrapper,
  SideContainer,
  CentralContainer,
  HeaderLabel,
} from './style';

const styles = {
  wave: {
    width: '100%',
    position: 'absolute',
    transform: 'rotate(180deg)',
    left: 0,
    top: 0,
  }
};

class TitleArea extends React.PureComponent {
  render() {
    const { player } = this.props;
    return (
      <TitleAreaWrapper>
        <img src={wave} alt={'wave'} style={styles.wave} />
        <SideContainer type={'positive'}>
          <HeaderLabel>{`正方: ${player.positive.title}`}</HeaderLabel>
          <HeaderLabel>{player.positive.name}</HeaderLabel>
        </SideContainer>
        <CentralContainer>
          <HeaderLabel>{this.props.globalConfig[`section_${this.props.currentSection}`].name}</HeaderLabel>
        </CentralContainer>
        <SideContainer type={'negative'}>
          <HeaderLabel>{`反方: ${player.negative.title}`}</HeaderLabel>
          <HeaderLabel>{player.positive.name}</HeaderLabel>
        </SideContainer>
      </TitleAreaWrapper>
    );
  }
}

export default TitleArea;
