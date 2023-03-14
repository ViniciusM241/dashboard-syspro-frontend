import React from 'react';
import { StyledInput, StyledLabel, StyledError } from './styles';

function Input({
  label,
  ...props
}) {
  return (
    <div style={{width: '100%'}}>
      <StyledLabel htmlFor={props.name}>
        {label}
        <StyledInput {...props} />
      </StyledLabel>
      <StyledError error={props.error && !props.disabled}>
        {props.error || <>&nbsp;</>}
      </StyledError>
    </div>
  );
}

export default Input;
