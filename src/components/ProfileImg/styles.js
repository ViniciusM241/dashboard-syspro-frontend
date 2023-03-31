import styled from "styled-components";
import colors from "~/utils/colors";

export const Container = styled.div`
  width: ${props => props.config.width }px;
  height: ${props => props.config.height }px;

  border-radius: 50%;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${colors.NOTIFICATIONS_COUNT};
  border: ${props => props.config.borderWidth}px solid ${colors.NOTIFICATIONS_COUNT};
  cursor: pointer;

  position: relative;
  z-index: 10;
`;
