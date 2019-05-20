import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkWrapper = styled.span` 

  & > a {
    text-decoration: none;
  }


  & > a > div {
    border-radius: 3px;
    ${props => props.currentlySelected && "font-weight: 800"}
  }

  & > a > div:hover {
    border: 1px solid green !important;
  }

  & > a:active {
    // border: 1px solid yellow !important;
  }

  & > a:visited {
    border: 1px solid purple;
  }

`;

const DayOfWeek = styled.div`
  font-size: .7rem;
`;

const Month = styled.div`
  font-size: 1.5rem;
`;

const Day = styled.div`
  font-size: 2rem;
`;

const DatePickerLink = ({ date, uri, onDateSelected, currentlySelected }) => {
  return ( 
    <LinkWrapper 
      currentlySelected={currentlySelected}
    >
      <Link to={uri} onClick={() => onDateSelected(date)}>
        <div>
          <DayOfWeek>{date.format('dddd').toUpperCase()}</DayOfWeek>
          <Month>{date.format('MMM').toUpperCase()}</Month>
          <Day>{date.format('DD')}</Day>
        </div>
      </Link>
    </LinkWrapper>
  );
};

export default DatePickerLink;
