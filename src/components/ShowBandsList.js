import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Headliner = styled.li`
  font-size: 1.4rem !important;
  font-weight: bolder;
`;

const BandList = styled.ul`
  & > li {
    padding: .25rem;
    text-align: left;
    font-size: 1rem;
  }
`;

// TODO: Replace "bands" terminology -> "supportingActs"
const ShowBandsList = ({ headliner, bands }) => {
  return (
    <BandList>
      <Headliner>
        <Link to={`/band/${headliner}`}>
          {headliner} 
        </Link>
      </Headliner>
      { bands.map(band => 
      <li key={band}><Link to={`/band/${band}`}>{band}</Link></li>
      )
      }
    </BandList>
  );
}

export default ShowBandsList;
