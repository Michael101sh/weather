import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const Menu = () => (
  <Nav>
    <li>
      <StyledLink to="/">Home</StyledLink>
    </li>
    <li>
      <StyledLink to="/favorites">Favorites</StyledLink>
    </li>
  </Nav>
);

export default Menu;

const StyledLink = styled(Link)`
  color: mintcream;
  text-decoration: none;
`;

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  font-size: 2.8rem;
  width: 20rem;
  justify-content: space-between;
  margin-left: 5rem;
`;
