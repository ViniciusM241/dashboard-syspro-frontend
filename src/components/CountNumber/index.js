import React, { useEffect, useState } from 'react';

import { StyledItem, StyledContainer } from './styles';

function CountNumber({
  dataset=0,
  ...props
}) {
  const [number, setNumber] = useState(0);

  const maskNumber = (number) => {
    return String(number).padStart(3, '0');
  };

  useEffect(() => {
    setNumber(0);

    const interval = setInterval(() => {
      setNumber((state) => {
        if (state === dataset) return state;

        return state + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [dataset]);

  return (
    <StyledContainer>
      <StyledItem {...props}>
        {maskNumber(number)}
      </StyledItem>
    </StyledContainer>
  );
}

export default CountNumber;
