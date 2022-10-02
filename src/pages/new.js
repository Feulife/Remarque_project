import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import RemarqueForm from '../components/RemarqueForm';
import { NEW_REMARQUE } from '../gql/mutation';
import { GET_MY_REMARQUES, GET_REMARQUES } from '../gql/query';

const NewRemarque = props => {
  useEffect(() => {
    document.title = 'New Remarque';
  });

  const [data, { loading, error }] = useMutation(NEW_REMARQUE, {
    refetchQueries: [{ query: GET_MY_REMARQUES }, { query: GET_REMARQUES }],
    onCompleted: data => {
      props.history.push(`remarque/${data.newRemarque.id}`);
    }
  });

  return (
    <React.Fragment>
      {loading && <p>Loading...</p>}
      {error && <p>Error saving the note</p>}
      <RemarqueForm action={data} />
    </React.Fragment>
  );
};

export default NewRemarque;