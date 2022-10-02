import React from 'react';
import { useQuery } from '@apollo/client';

import Remarque from '../components/Remarque';
import { GET_REMARQUE } from '../gql/query';

const RemarquePage = props => {
  let id = props.match.params.id;

  const { loading, error, data } = useQuery(GET_REMARQUE, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! Remarque not found</p>;

  return <Remarque note={data.remarque} />;
};

export default RemarquePage;