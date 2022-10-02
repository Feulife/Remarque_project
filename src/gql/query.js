import { gql } from '@apollo/client';

const GET_REMARQUES = gql`
  query noteFeed($cursor: String) {
    remarqueFeed(cursor: $cursor) {
      cursor
      hasNextPage
      remarques {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const GET_REMARQUE = gql`
  query remarque($id: ID!) {
    remarque(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

const GET_MY_REMARQUES = gql`
  query me {
    me {
      id
      username
      remarques {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const GET_MY_FAVORITES = gql`
  query me {
    me {
      id
      username
      favorites {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const GET_ME = gql`
  query me {
    me {
      id
      favorites {
        id
      }
    }
  }
`;

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

export {
  GET_REMARQUES,
  GET_REMARQUE,
  GET_MY_REMARQUES,
  GET_MY_FAVORITES,
  GET_ME,
  IS_LOGGED_IN
};
