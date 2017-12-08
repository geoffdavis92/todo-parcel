import React from "react";
import styled from "styled-components";
import { theme } from "../utils/settings";

const TextInput = styled.input`
  appearance: none;
  border: 0px solid ${theme.colors.background};
  border-bottom: 2px solid ${theme.colors.border};
  color: ${theme.colors.text};
  font-size: 20px;
  padding: 0.25em 0;
  transition: 0.2s border-color;
  &:focus {
    border-bottom-color: ${theme.colors.text};
    outline: none;
  }
`;

export default ({ type, ...restProps }) => (
  <TextInput type="text" {...restProps} />
);
