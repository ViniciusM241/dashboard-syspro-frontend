import styled from "styled-components";
import colors from "~/utils/colors";

export const Container = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 25px;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-color: black;
  border: 3px solid ${colors.NOTIFICATIONS_COUNT};
  cursor: pointer;

  position: relative;
  z-index: 10;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Collapse = styled.div`
  width: 150px;

  background-color: ${colors.MENU_ITEM_COLOR};
  border-radius: 5px;

  box-shadow: 2px 1px 5px 0px rgba(0, 0, 0, .25);

  position: absolute;
  top: 70%;
  right: 8px;
`;

export const CollapseItem = styled.div`
  padding: 5px 10px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-bottom: 1px solid rgba(0, 0, 0, .25);
  transition: all .2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, .25);
  }
`;
