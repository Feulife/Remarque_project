import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import RemarqueUser from './RemarqueUser';
import { IS_LOGGED_IN } from '../gql/query';

const StyledRemarque = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

const MetaInfo = styled.div`
  padding-right: 1em;
`;

const UserActions = styled.div`
  margin-left: auto;
`;

const Remarque = ({ remarque }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <StyledRemarque>
      <MetaData>
        <MetaInfo>
          <img
            src={remarque.author.avatar}
            alt={`${remarque.author.username} avatar`}
            height="50px"
          />
        </MetaInfo>
        <MetaInfo>
          <em>by</em> {remarque.author.username} <br />
          {format(remarque.createdAt, 'MMM Do YYYY')}
        </MetaInfo>
        {data.isLoggedIn ? (
          <UserActions>
            <NoteUser note={remarque} />
          </UserActions>
        ) : (
          <UserActions>
            <em>Favorites:</em> {remarque.favoriteCount}
          </UserActions>
        )}
      </MetaData>
      <ReactMarkdown source={remarque.content} />
    </StyledRemarque>
  );
};

export default Remarque;