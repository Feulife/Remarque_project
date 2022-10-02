import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import RemarqueFeed from '../components/RemarqueFeed';
import { GET_MY_REMARQUES } from '../gql/query';

const MyRemarques = () => {
  useEffect(() => {
    document.title = 'My Remarques';
  });

  const { loading, error, data } = useQuery(GET_MY_REMARQUES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (data.me.remarques.length !== 0) {
    return <RemarqueFeed remarques={data.me.remarques} />;
  } else {
    return <p>No remarques yet</p>;
  }
};

export default MyRemarques;
