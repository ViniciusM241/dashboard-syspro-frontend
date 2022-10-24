import React from 'react';

import { Wrapper } from './styles';

function Box (props) {
  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  );
}

export default Box;
