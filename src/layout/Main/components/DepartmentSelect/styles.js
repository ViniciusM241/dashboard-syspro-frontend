import styled from "styled-components";
import colors from "~/utils/colors";

export const Container = styled.select`
  border: none;
  background-color: transparent;

  font-size: 1rem;
  color: ${colors.MAIN_FONT_COLOR};
  font-weight: 600;
  text-align: left;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
