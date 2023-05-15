import React from 'react';
import { StyledContainer } from './styles';

function ProgressBar(props) {
  const percentDone = props.done / props.max * 100;
  const percentNotDone = props.notDone / props.max * 100;

  return (
    <StyledContainer {...props} percentNotDone={percentNotDone} percentDone={percentDone}>
      <div className='rest'>
        <p>{percentNotDone.toFixed(2).replace('.00', '')}% <span>({props.notDone})</span></p>
      </div>
      <div className='value'>
        <p>{percentDone.toFixed(2).replace('.00', '')}% <span>({props.done})</span></p>
      </div>
    </StyledContainer>
  );
}

export default ProgressBar;
