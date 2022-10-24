import React from 'react';
import { Container, StyledInput, StyledLabel } from './styles';

function CheckInput ({ label, onChange, values, styled, ...props }) {
  const handleOnChange = (e) => {
    if (onChange) onChange(e, state => ({ ...state, [e.target.name]: !values?.[props.name] }));
  };

  return (
    <Container styled={styled}>
      <StyledInput
        {...props}
        type="checkbox"
        name={props?.name}
        id={props.value}
        checked={values?.[props.name]}
        onChange={handleOnChange}
        styled={styled}
      />
      <StyledLabel htmlFor={props?.value} styled={styled}>
        {label}
      </StyledLabel>
    </Container>
  );
}

export default CheckInput;
