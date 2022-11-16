import React from "react";

import { Container, Item } from "./styles";

function List({ data }) {

  return (
    <Container>
      {
        data?.map((data, index) => (
          <Item key={index} className='mt-10'>
            <strong>{data.key}</strong>
            {data.value}
          </Item>
        ))
      }
    </Container>
  );
}

export default List;
