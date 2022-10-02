import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RemarqueWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

import Remarque from './Remarque';

const RemarqueFeed = ({ remarques }) => {
  return (
    <div className="remarque-feed">
      {remarques.map(remarque => (
        <RemarqueWrapper key={remarque.id}>
          <Remarque remarque={remarque} />
          <Link to={`remarque/${remarque.id}`}>Permalink</Link>
        </RemarqueWrapper>
      ))}
    </div>
  );
};

export default RemarqueFeed;
