import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #18181B;
  font-size: 15px;
  cursor: pointer;
  ${props => props.active ? 'font-weight: bold; text-decoration: underline;' : ''}

  > .circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.color || "#000"};
  }

  &:hover {
    text-decoration: underline;
  }
`;
