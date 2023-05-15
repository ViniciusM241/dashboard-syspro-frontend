import styled from "styled-components";
import colors from "~/utils/colors";

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 25px;
  padding-top: 0;
  background-color: #F4F4F4;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .percent {
    font-weight: bold;
    font-size: 18px;
    color: ${colors.PROGRESS_GREEN};
  }

  .name {
    font-size: 16px;
    font-weight: medium;
    margin-top: -25px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
