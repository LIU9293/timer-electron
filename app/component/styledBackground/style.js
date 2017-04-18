import styled from 'styled-components';

export const Background = styled.div`
  height: 100%;
  width: 100%;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #232C39;
  background-image: linear-gradient(45deg, rgba(0, 216, 255, .5) 10%, rgba(0, 40, 250, .7));
  transition: all 0.3s ease;
  filter: ${props => 'hue-rotate(' + (props.currentSection - 1) * 70/props.sectionLength + 'deg);'};
  opacity: 0.6;
`;

export const BackgroundIamge = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: left;
  filter: blur(5px);
`;

// background-image: url('https://github.com/LIU9293/debatetimer/raw/gh-pages/include/back4.jpg');
