import styled from "styled-components";
import colors from "~/utils/colors";

export const StyledContainer = styled.div`
  width: 100%;
  min-width: 400px;
  height: 25px;
  background-color: #F4F4F4;
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > .rest {
    width: ${props => props.percentNotDone}%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 10px;
    font-weight: bold;
  }

  > .value {
    width: ${props => props.value};
    height: 100%;
    border: 1px solid #FFF;
    border-radius: 3px;
    background-color: ${colors.PROGRESS_GREEN};
    font-size: 10px;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
