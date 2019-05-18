import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import DatePickerLink from './DatePickerLink';

const ToolbarContainer = styled.div`
  // YES! CSS-GRID BABY, WE CAN DO THIS!
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  border: 1px solid black;
  // min-height: 3rem;
  width: 100%;
`;

const DatePickerToolbar = () => {
  const [selectedDate, onDateSelected ] = useState(0);
  console.log(selectedDate);
  const nextFiveDays = [1, 2, 3, 4, 5]
    .reduce((acc, current, index) => {
      acc.push(index === 0 ? 
        moment() :
        acc[index - 1].clone().add(1, 'days')
      );
      return acc;
    }, [])
    .reverse();
    // console.log(nextFiveDays.map(d => d.format('dddd MMM Do YYYY')));

  return (
      <ToolbarContainer>
        {nextFiveDays.map(day =>  {
        const sameDate = day.isSame(selectedDate, 'day') && 
        day.isSame(selectedDate, 'month');
        console.log({ day, selectedDate, sameDate }, 'hrrm');
        return (
          <span 
            style={{ 
              border: sameDate ? 'solid 1px blue' : '' 
            }}>
            <DatePickerLink 
              onDateSelected={(selected) => onDateSelected(selected)}
              key={day.format('MM-DD-YYYY')}
              date={day}
              uri={`/shows/${day.format('MM-DD-YYYY')}`}
            />
          </span>
          )
          }
            )
            }
      </ToolbarContainer>
  );
};

export default DatePickerToolbar;
