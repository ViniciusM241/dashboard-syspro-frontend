import React from 'react';

import { Wrapper } from './styles';

import Box from '../Box';

function Dashboard() {

  return (
    <Wrapper className='mt-20'>
      <Box col={1} row={1} />
      <Box col={1} row={2} />
      <Box col={1} row={1} />
      <Box col={1} row={1} />
    </Wrapper>
  );
}

export default Dashboard;
