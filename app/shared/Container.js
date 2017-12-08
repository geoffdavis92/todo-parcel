import React from "react";
import styled from "styled-components";
import { theme } from "../utils/settings";

const Container = styled.main`
	border: 1px solid ${theme.colors.border_light};
	font-family: "Roboto", "Open Sans", sans-serif;
	font-size: 20px;
	padding: 1.25em;
`;

export default props => <Container {...props} />;
