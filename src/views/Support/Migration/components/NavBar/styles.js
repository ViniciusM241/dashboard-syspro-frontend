import styled from "styled-components";
import colors from "~/utils/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 5px solid ${colors.FOREGROUND};

  > h3 {
    padding: 4px 10px;
    border-bottom: 5px solid transparent;
    margin-bottom: -5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
    transition: all .3s ease;

    &.active {
      border-color: #1890FF;
    }

    &:first-child {
      padding-left: 0;
    }

    &:hover {
      background-color: ${colors.FOREGROUND};
    }
  }
`;
