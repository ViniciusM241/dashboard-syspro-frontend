import styled from "styled-components";
import colors from "~/utils/colors";

export const Author = styled.div`
  display: flex;

  .name {
    font-size: 16px;
  }

  .publishedDate {
    margin-top: 5px;
    font-size: 12px;
    color: ${colors.MENU_ITEM_SELECTED}
  }
`;

export const ProfileImg = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 25px;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-color: black;

  border: 3px solid ${colors.NOTIFICATIONS_COUNT};
`;

export const Banner = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 300px;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #3333;
  border-radius: 2px;
`;

export const Subtitle = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;
