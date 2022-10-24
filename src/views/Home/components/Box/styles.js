import styled from 'styled-components';
import colors from '~/utils/colors';

export const Container = styled.div`
  background-color: ${colors.WHITE};
  border-radius: 8px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, .25);
  padding: 10px;
  padding-top: 0;

  grid-column: auto/ span ${props => props.col};
  grid-row: auto/ span ${props => props.row};

  flex: 1;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${colors.RED};

  border-bottom: 1px solid ${colors.LINE};
`

export const Content = styled.div`
  padding: 0 10px 10px 10px;
`;
