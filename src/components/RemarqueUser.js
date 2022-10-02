import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import DeleteRemarque from './DeleteRemarque';
import FavoriteRemarque from './FavoriteRemarque';
import { GET_ME } from '../gql/query';

const RemarqueUser = props => {
  const { loading, error, data } = useQuery(GET_ME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <React.Fragment>
      <FavoriteRemarque
        me={data.me}
        noteId={props.remarque.id}
        favoriteCount={props.remarque.favoriteCount}
      />
      <br />
      {data.me.id === props.remarque.author.id && (
        <React.Fragment>
          <Link to={`/edit/${props.remarque.id}`}>Edit</Link> <br />
          <DeleteRemarque remarqueId={props.remarquee.id} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default RemarqueUser;
