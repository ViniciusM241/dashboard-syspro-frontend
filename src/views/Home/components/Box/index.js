import React from 'react';

import { Container, Title, Content } from './styles';

import {
  MonthYear,
} from '../filters';

function Box({
  children,
  title,
  filterType,
  filters,
  setFilters,
  ...props
}) {

  const filterTypeComponents = {
    'month/year': (<MonthYear filters={filters} setFilters={setFilters} filterKey={children.props.type} />),
  };

  return (
    <Container {...props}>
      <Content>
        {
          title && (
            <Title className='mb-10'>
              {title}
              {filterTypeComponents[filterType] && filterTypeComponents[filterType]}
            </Title>
          )
        }
        {children}
      </Content>
    </Container>
  );
}

export default Box;
