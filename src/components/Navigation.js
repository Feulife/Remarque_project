import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1em;
  background: #f5f4f0;

  @media(max-width: 800px) {
    padding-top: 50px;
  }

  @media (min-width: 800px) {
    position: fixed;
    width: 200px;
    height: calc(100% - 50px);
    overflow-y: scroll;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`;

const Novigation = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/myremarq">My Remarq</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        {/* <li>
          <Link to="/singup">Sing Up</Link>
        </li> */}
      </NavList>
    </Nav>
  );
};

export default Novigation;