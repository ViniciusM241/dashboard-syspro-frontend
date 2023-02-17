import moment from 'moment';
import React from 'react';
import months from '~/utils/months';

import { Select, Container } from './styles';

function MonthYear({
  setFilters,
  filters,
  filterKey,
}) {
  const currentYear = moment().year();
  const years = [...Array(12).keys()].map(x => currentYear - x);

  const handleChange = (e, filter) => {
    const value = e.target.value;

    setFilters(state => ({
      ...state,
      [filterKey]: {
        ...state[filterKey],
        [filter]: value,
      },
    }));
  };

  return (
    <Container>
        <Select value={filters[filterKey]?.month || moment().month()} onChange={(e) => handleChange(e, 'month')}>
          {
            Object.keys(months).map((key) =>
              <option key={months[key].value} value={months[key].value}>
                {months[key].minLabel}
              </option>
            )
          }
        </Select>
        <Select value={filters[filterKey]?.year || currentYear} onChange={(e) => handleChange(e, 'year')}>
          {
            years.map((year) =>
              <option key={year} value={year}>
                {year}
              </option>
            )
          }
        </Select>
    </Container>
  );
}

export default MonthYear;
