import React from "react";
import styled from "styled-components";
import { theme } from "../utils/settings";

const Checkbox = styled.input`
	appearance: none;
	background: ${({ checked }) =>
		checked ? theme.colors.blue : theme.colors.background};
	border: 2px solid ${theme.colors.border};
	border-radius: 1px;
	${({ checked }) =>
		checked ? `box-shadow: 0 0 0 2px ${theme.colors.background} inset` : ""};
	display: inline-block;
	height: 24px;
	margin: auto;
	vertical-align: middle;
	width: 24px;
`;

export default ({ type, checked, ...restProps }) => (
	<Checkbox type="checkbox" checked={checked} {...restProps} />
);
