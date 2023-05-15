import React from "react";

import {
  Container,
} from './styles';

function ChartLabel({
  label,
  data,
  color,
  onClick,
  active,
}) {
  return (
    <Container onClick={onClick} color={color} active={active}>
      <div className="circle mr-10"></div>
      <p>{label} ({data})</p>
    </Container>
  );
}

export default ChartLabel;
