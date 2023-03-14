import styled from "styled-components";

function calcWidth(cols) {
  const result = cols / 12 * 100;

  return result;
}

export const StyledCol = styled.div`
  display: flex;
  align-items: center;

  width: calc(${props => calcWidth(props.cols)}% - 20px);
  margin-right: 10px;
  margin-left: 10px;

  /* background-color: yellow; */
`;
