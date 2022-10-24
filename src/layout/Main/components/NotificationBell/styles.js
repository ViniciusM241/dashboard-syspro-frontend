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
