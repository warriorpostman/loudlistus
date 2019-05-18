import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const BandList = styled.ul`
  & > li:first-child {
    font-size: 1.3rem;
    font-weight: bolder;
  }
  & > li {
    padding: .25rem;
    text-align: left;
    font-size: 1rem;
  }
`;

const ShowBandsList = ({ bands }) => {
  return (
    <BandList>
        { bands && bands.map(band => 
        <li key={band}><Link to={`/band/${band}`}>{band}</Link></li>
        )
        }
    </BandList>
  );
}

export default ShowBandsList;
