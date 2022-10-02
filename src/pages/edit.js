import React from 'react';
import { useMutation, useQuery } from '@apollo/client';

import RemarqueForm from '../components/RemarqueForm';
import { GET_REMARQUE, GET_ME } from '../gql/query';
import { EDIT_REMARQUE } from '../gql/mutation';

const EditRemarque = props => {
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(GET_REMARQUE, { variables: { id } });
  const { data: userdata } = useQuery(GET_ME);
  const [editRemarque] = useMutation(EDIT_REMARQUE, {
    variables: {
      id
    },
    onCompleted: () => {
      props.history.push(`/remarque/${id}`);
    }
  });

  if (loading) return 'Loading...';
  if (error) return <p>Error!</p>;
  if (userdata.me.id !== data.remarque.author.id) {
    return <p>You do not have access to edit this note</p>;
  }

  return <RemarqueForm content={data.remarque.content} action={editRemarque} />;
};

export default EditRemarque;
