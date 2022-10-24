import styled from "styled-components";
import colors from "~/utils/colors";

export const StyledInput = styled.input`
  display: inline-flex;
  padding: 10px 7px;
  width: 100%;
  margin-top: 5px;

  background-color: ${colors.LIGHT_GRAY};
  border-radius: 5px;
  border: 1px solid ${props => props.disabled ? colors.LIGHT_GRAY : props.error ? colors.RED_30 : colors.GRAY};
  outline: none;

  &:focus {
    border: 1px solid ${colors.LIGHT_BLUE};
  }
`;

export const StyledLabel = styled.label`
  width: 100%;
`;

export const StyledError = styled.span`
  color: ${colors.RED};
  font-size: .7rem;
  width: 100%;
`;
