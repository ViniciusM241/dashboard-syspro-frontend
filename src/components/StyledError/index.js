import React from 'react';
import { Styled } from './styles';

function StyledError({
  children,
  ...props
}) {
  return (
    <Styled {...props}>
      {children}
    </Styled>
  );
}

export default StyledError;
