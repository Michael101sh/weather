import React from "react";
import styled from "styled-components/macro";
import { TVBox } from "../styles-lib/containers";

const Credit = () => {
  return (
    <Box>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/michael-shachar-101/"
      >
        <Logo src="Michael_Shachar.png" />
      </Link>
      <T>© Michael Shachar</T>
    </Box>
  );
};

export default Credit;

const Box = styled(TVBox)`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
`;
const T = styled.h5`
  font-size: 1.3rem;
  user-select: none;
  color: white;
`;
const Link = styled.a`
  padding-top: 0.5rem;
`;
const Logo = styled.img`
  width: 8rem;
  cursor: pointer;
`;
