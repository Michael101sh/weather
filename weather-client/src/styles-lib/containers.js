import styled from "styled-components";
import { flexbox } from "./mixins";

export const HBox = styled.div`
  ${flexbox()};
`;
export const VBox = styled.div`
  ${flexbox({ dir: "column" })};
`;
export const TVBox = styled.div`
  ${flexbox({ dir: "column", jc: "flex-start" })};
`;
export const TLVBox = styled.div`
  ${flexbox({ dir: "column", jc: "flex-start", ai: "flex-start" })};
`;

export const Button = styled.button`
  outline-style: none;
  border-style: none;
  background: skyblue;
  text-transform: uppercase;
  color: white;
  font-size: 2.8rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  height: 50px;
  width: 200px;
  cursor: pointer;
  font-family: "Yanone Kaffeesatz", sans-serif;
  margin: 1rem;
  &:hover {
    background: #7ec0ee;
  }
  &:active {
    background: fuchsia;
  }
`;
