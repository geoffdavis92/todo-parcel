import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import TextInput from "../shared/TextInput";

const Footer = styled.footer`
	padding: 1em 0 0;
	text-align: center;
`;

const Nav = styled.nav`
	/* display: grid;
	grid-template-columns: repeat(2, 50%);
	justify-items: center;
	margin: auto;
	max-width: 33%; */
`;

export default props => (
	<Footer>
		<TextInput />
	</Footer>
);
