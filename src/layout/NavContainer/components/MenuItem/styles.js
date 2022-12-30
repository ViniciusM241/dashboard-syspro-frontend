import styled from "styled-components";
import colors from "~/utils/colors";

export const Container = styled.div`
  width: 100%;
  padding: 10px 10px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${props => props.selected && `background-color: ${colors.MENU_ITEM_SELECTED};`}

  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    background-color: ${colors.MENU_ITEM_SELECTED};
  }

  & > p {
    color: ${colors.MENU_ITEM_COLOR};
    font-weight: 500;
  }
`;
