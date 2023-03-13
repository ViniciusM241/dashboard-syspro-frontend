import React, { useEffect } from 'react';
import { Container, StyledInput, StyledLabel } from './styles';

function CheckGroup ({ label, onChange, values, styled, ...props }) {
  useEffect(() => {
    let newState = values?.[props.name];

    if (props.checked) {
      if (values?.[props.name].includes(props.value)) return;
      newState.push(props.value);
    } else {
      newState = newState.filter(x => x !== props.value);
    }

    onChange(null, state => ({ ...state, [props?.name]: newState }))
  }, [props.checked]);

  const handleOnChange = (e) => {
    let newState = values?.[props.name];

    if (values?.[props.name].includes(props.value)) {
      newState = newState.filter(x => x !== props.value);
    } else {
      newState.push(props.value);
    }

    if (onChange) onChange(e, state => ({ ...state, [e.target.name]: newState }));
  };

  return (
    <Container styled={styled}>
      <StyledInput
        {...props}
        type="checkbox"
        name={props?.name}
        id={props.value}
        checked={values?.[props.name].includes(props.value)}
        onChange={handleOnChange}
        styled={styled}
      />
      <StyledLabel htmlFor={props?.value} styled={styled}>
        {label}
      </StyledLabel>
    </Container>
  );
}

export default CheckGroup;
