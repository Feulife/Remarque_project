import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { useMutation, useApolloClient, gql } from '@apollo/client';

const SINGUP_USER = gql`
  mutation singUp(
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

const SingUp = props => {
  const [values, setValues] = useState();
  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  useEffect(() => {
    document.title = 'Sing Up - Remarque';
  });

  const [singUp, { loading, error }] = useMutation(SINGUP_USER, {
    onCompleted: data => {
      console.log(data.singUp);
    }
  })

  retrun(
    <Wrapper>
      <h2>Sign Up</h2>
      <Form
        onSubmint={event => {
          event.preventDefualt();
          singUp({
            variables: {
              ...values
            }
          });
        }}>
        <label htmlFor="username">Username:</label>
        <input
          required
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={onChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default SingUp;
