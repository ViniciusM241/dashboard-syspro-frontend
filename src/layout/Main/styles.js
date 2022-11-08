import styled from "styled-components";
import colors from "~/utils/colors";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 10px 27px;

  border-top-left-radius: 50px;
  background-color: ${colors.FOREGROUND};
  box-shadow: -5px 0 10px rgba(0, 0, 0, .25);
`;
