import styled from 'styled-components';

export const TitleAreaWrapper = styled.div`
  width: 100%;
  height: 160px;
  position: absolute;
  background: linear-gradient(to top, transparent, rgba(155, 155, 155, 0.2));
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: ${props => props.type === 'positive' ? 'left' : 'right'}
`;

export const CentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 10px;
`;

export const HeaderLabel = styled.div`
  font-size: 22px;
  color: white;
`;
