import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledItem = styled.div`
  font-size: 5rem;
  font-weight: 500;
  color: ${props => props.color || '#5CC8FF'};
`;
