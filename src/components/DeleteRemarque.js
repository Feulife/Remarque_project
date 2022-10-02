import React from 'react';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';

import ButtonAsLink from './ButtonAsLink';
import { DELETE_REMARQUE } from '../gql/mutation';
import { GET_MY_REMARQUES, GET_REMARQUES } from '../gql/query';

const DeleteRemarque = props => {
  const [deleteRemarque] = useMutation(DELETE_REMARQUE, {
    variables: {
      id: props.remarqueId
    },
    refetchQueries: [{ query: GET_MY_REMARQUES, GET_REMARQUES }],
    onCompleted: data => {
      props.history.push('/myremarques');
    }
  });

  return <ButtonAsLink onClick={deleteRemarque}>Delete Remarque</ButtonAsLink>;
};

export default withRouter(DeleteRemarque);
