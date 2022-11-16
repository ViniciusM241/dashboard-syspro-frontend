import styled from "styled-components";
import colors from "~/utils/colors";

export const Container = styled.div`
  width: 100%;
`;

export const Item = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: .8rem;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.GRAY};

  > strong {
    width: 60%;
  }
`;
