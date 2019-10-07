import React from "react";
import styled, { keyframes } from "styled-components/macro";
import * as c from "../../styles-lib/colors";

const TopBar = ({ children }) => (
  <Box>
    <Text>{children}</Text>
    <Logo src="./logo.png" alt="logo" />
  </Box>
);

export default TopBar;

const Box = styled.div`
  display: flex;
  align-items: center;
  background: ${c.GREY};
  width: 100%;
  height: 50px;
  padding: 20px;
  color: mintcream;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 4rem;
  animation: ${spin} 2s linear infinite;
`;

const Text = styled.h1`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  font-size: 3rem;
  font-weight: normal;
  cursor: pointer;
  user-select: none;
  position: relative;
`;
