import styled from 'styled-components';

export const TitleAreaWrapper = styled.div`
  width: 100%;
  height: 160px;
  position: absolute;
  background: linear-gradient(to top, transparent, rgba(27, 110, 194, 0.5));
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${props => props.type === 'positive' ? 'left' : 'right'}
`;

export const CentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const HeaderLabel = styled.div`
  font-size: 24px;
  color: white;
`;
