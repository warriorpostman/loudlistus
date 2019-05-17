import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkWrapper = styled.span` 
  margin-left: 1rem;

  & > a {
    padding: 1rem;
    border-radius: 3px;
    border: 1px solid red;

  }

  & > a:hover {
    border: 1px solid green !important;
  }
`;

const DatePickerLink = ({ text, uri }) => (
  <LinkWrapper><Link to={uri}>{text}</Link></LinkWrapper>
);

export default DatePickerLink;
