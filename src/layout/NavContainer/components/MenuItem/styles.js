import styled from "styled-components";
import colors from "~/utils/colors";

export const Container = styled.div`
  width: 100%;
  padding: 10px 10px;

  display: flex;
  align-items: center;
  justify-content: ${props => props.navbarStatus === 'opened' ? "flex-start" : "center"};

  ${props => props.selected && `background-color: ${colors.MENU_ITEM_SELECTED};`}

  cursor: pointer;
  transition: all .2s ease;

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:hover {
    background-color: ${colors.MENU_ITEM_SELECTED};
  }

  & > p {
    color: ${colors.MENU_ITEM_COLOR};
    font-weight: 500;
  }
`;
