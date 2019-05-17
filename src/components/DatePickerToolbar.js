import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { BrowserRouter } from 'react-router-dom';

import DatePickerLink from './DatePickerLink';

const ToolbarContainer = styled.div`
  border: 1px solid black;
`;

const DatePickerToolbar = () => {
  const nextFiveDays = [1, 2, 3, 4, 5]
    .reduce((acc, current, index) => {
      acc.push(index === 0 ? 
        moment() :
        acc[index - 1].clone().add(1, 'days')
      );
      return acc;
    }, []);
    console.log(nextFiveDays.map(d => d.format('dddd MMM Do YYYY')));

  return (
    <BrowserRouter>
      <ToolbarContainer>
        {nextFiveDays.map(day => 
          <DatePickerLink 
            key={day.format('MM-DD-YYYY')}
            text={day.format('dddd')}
            uri={`/date/${day.format('MM-DD-YYYY')}`}
          />
          )
        }
      </ToolbarContainer>
    </BrowserRouter>
  );
};

export default DatePickerToolbar;
