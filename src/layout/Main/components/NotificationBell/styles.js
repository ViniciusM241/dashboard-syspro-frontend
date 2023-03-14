import styled from "styled-components";
import colors from "~/utils/colors";

export const Container = styled.div`
  cursor: pointer;
  position: relative;
`;

export const NotificationsCount = styled.div`
  width: 15px;
  height: 15px;

  border-radius: 15px;

  background-color: ${colors.NOTIFICATIONS_COUNT};
  font-size: .8rem;
  color: ${colors.MAIN_FONT_COLOR};
  font-weight: 600;
  text-align: center;

  position: absolute;
  top: -5px;
  right: -5px;
`;

export const Collapse = styled.div`
  width: fit-content;
  min-width: 400px;
  min-height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: default;

  background-color: ${colors.MENU_ITEM_COLOR};
  border-radius: 5px;

  box-shadow: 2px 1px 5px 0px rgba(0, 0, 0, .25);

  position: absolute;
  top: 100%;
  right: 8px;

  .no-notifications {
    text-align: center;
    width: 100%;
    font-size: 14px;
    opacity: .5;
    margin-top: 50px;
  }

  > .header, > .footer {
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
  }

  > .header {
    border-bottom: 1px solid rgba(0, 0, 0, .25);
  }

  > .body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 200px;
    overflow-y: scroll;
  }

  > .footer {
    justify-content: flex-end;
    border-top: 1px solid rgba(0, 0, 0, .25);
  }
`;

export const CollapseItem = styled.div`
  width: 100%;
  padding: 10px 10px;
  cursor: pointer;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  border-left: 3px solid ${colors.NOTIFICATIONS_COUNT};
  border-bottom: 1px solid rgba(0, 0, 0, .10);
  transition: background-color .2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, .05);
    border-left-width: 5px;
  }

  .title, > .message {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .title {
    font-weight: bold;
    -webkit-line-clamp: 1;
  }

  .date {
    font-size: 12px;
  }

  > .message {
    font-size: 14px;
    -webkit-line-clamp: 2;
  }
`;

export const ClearAll = styled.button`
  background-color: #fff;
  outline: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`;
