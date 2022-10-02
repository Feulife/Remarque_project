import { gql } from '@apollo/client';

const NEW_REMARQUE = gql`
  mutation newRemarque($content: String!) {
    newRemarque(content: $content) {
      id
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;

const EDIT_REMARQUE = gql`
  mutation updateRemarque($id: ID!, $content: String!) {
    updateRemarque(id: $id, content: $content) {
      id
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;

const DELETE_REMARQUE = gql`
  mutation deleteRemarque($id: ID!) {
    deleteRemarque(id: $id)
  }
`;

const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
      favoriteCount
    }
  }
`;

const SIGNIN_USER = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

export {
  NEW_REMARQUE,
  EDIT_REMARQUE,
  DELETE_REMARQUE,
  TOGGLE_FAVORITE,
  SIGNIN_USER,
  SIGNUP_USER
};
