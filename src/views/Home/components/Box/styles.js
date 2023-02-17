import styled from 'styled-components';
import colors from '~/utils/colors';

export const Container = styled.div`
  background-color: ${colors.WHITE};
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, .05);
  padding: 10px;

  grid-column: auto/ span ${props => props.col};
  grid-row: auto/ span ${props => props.row};
  overflow: hidden;
  overflow-y: scroll;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 5px;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${colors.MAIN_FONT_COLOR};

  border-bottom: 1px solid ${colors.LINE};
`;

export const Content = styled.div`
  height: 90%;
  padding: 5px 0;
`;
