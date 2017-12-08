import React from "react";
import styled from "styled-components";

import { theme } from "../utils/settings";

const EntryWrapper = styled.footer`
	padding: 1em 0 0;
	text-align: center;
`;

const TaskClearButton = styled.a`
	background-color: ${theme.colors.red};
	color: ${theme.colors.background};
	cursor: pointer;
	display: inline-block;
	margin: auto;
	padding: 0.25em 0.5em;
	text-decoration: none;
	user-select: none;
	&:active {
		background-color: ${theme.colors.red_light};
	}
`;

export default ({ onClick }) => (
	<EntryWrapper>
		<TaskClearButton {...{ onClick }}>Clear entries</TaskClearButton>
	</EntryWrapper>
);
