import React, { useEffect } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import UserForm from '../components/UseForm';

const SIGNUP_USER = gql`
  mutation signUp(
    $email: String!,
    $username: String!,
    $password: String!,
  ) {
    singUp(email: $email, username: $username, password: $password)
  }
`

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin:0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    margin-botto: 1em;
  }
`;

const SignUp = props => {
   useEffect(() => {
    document.title = 'Sign Up - Remarque';
  });

  const client = useApolloClient()
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      localStorage.setItem('token', data.signUp);
      client.writeData({ data: { isLoggedIn: true }})
      props.history.push('/');
      console.log(data.signUp);
    }
  })

  retrun(
    <React.Fragment>
      <UserForm action={signUp} formType="signup" />
      {loading && <p>Loading...</p>}
      {error && <p>Error creating an account!</p>}
    </React.Fragment>
  );
};

export default SignUp;
