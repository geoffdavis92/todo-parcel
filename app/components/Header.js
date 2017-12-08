import React from "react";
import { NavLink as NL } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../utils/settings";

const Header = styled.header`
	padding: 0 0 1em;
	text-align: center;
`;

const H1 = styled.h1`
	margin: 0 auto 0.5em;
`;

const Nav = styled.nav`
	display: grid;
	grid-template-columns: repeat(2, calc(20% - 0.5em));
	grid-column-gap: 1em;
	justify-content: center;
`;

const NavLink = styled(NL)`
	background-color: ${theme.colors.border_light};
	color: ${theme.colors.text};
	padding: 0.25em;
	text-decoration: none;
	&.active {
		background-color: ${theme.colors.blue};
		color: ${theme.colors.background};
	}
`;

const NavLinkActiveStyles = {};

export default props => (
	<Header>
		<H1>Task Manager</H1>
		<Nav>
			<NavLink exact to="/" activeClassName="active">
				Tasks
			</NavLink>
			<NavLink to="/completed" activeClassName="active">
				Completed
			</NavLink>
		</Nav>
	</Header>
);
