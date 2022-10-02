import React from 'react';
import { useQuery } from '@apollo/client';

import RemarqueFeed from '../components/RemarqueFeed';
import Button from '../components/Button';
import { GET_REMARQUES } from '../gql/query';

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_REMARQUES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <React.Fragment>
      <NoteFeed notes={data.remarqueFeed.remarques} />
      {data.remarqueeFeed.hasNextPage && (
        <Button
          onClick={() =>
            fetchMore({
              variables: {
                cursor: data.remarqueFeed.cursor
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                return {
                  noteFeed: {
                    cursor: fetchMoreResult.remarqueFeed.cursor,
                    hasNextPage: fetchMoreResult.remarqueFeed.hasNextPage,
                    notes: [
                      ...previousResult.remarqueFeed.remarques,
                      ...fetchMoreResult.remarqueFeed.remarques
                    ],
                    __typename: 'remarqueFeed'
                  }
                };
              }
            })
          }
        >
          Load more
        </Button>
      )}
    </React.Fragment>
  );
};

export default Home;
