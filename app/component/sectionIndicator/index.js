import React from 'react';
import {
  SectionIndicatorWrapper,
} from './style';

function SectionIndicator(props) {
  return(
    <SectionIndicatorWrapper>
      {props.children}
    </SectionIndicatorWrapper>
  );
}

export default SectionIndicator;
