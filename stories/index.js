import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button, Welcome } from "@storybook/react/demo";

import Task from "../app/components/Task";
import Checkbox from "../app/shared/Checkbox";
import Container from "../app/shared/Container";
import TextInput from "../app/shared/TextInput";

storiesOf("Welcome", module).add("to Storybook", () => (
	<Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
	.add("with text", () => (
		<Button onClick={action("clicked")}>Hello Button</Button>
	))
	.add("with some emoji", () => (
		<Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
	));

storiesOf("shared/Checkbox", module)
	.add("unchecked", () => <Checkbox />)
	.add("checked", () => <Checkbox checked />);
storiesOf("shared/Container", module).add("defaul", () => (
	<Container>
		<h2>Container</h2>
		<p>
			Esse ullamco officia do amet Lorem fugiat proident adipisicing excepteur
			do voluptate. Dolor aliquip labore nisi laborum tempor nostrud aliqua
			Lorem ad et magna. Ut sunt non aliquip incididunt voluptate deserunt
			cillum mollit ullamco et. Tempor aliquip cupidatat do sit ex.
		</p>
	</Container>
));
storiesOf("shared/TextInput", module).add("default", () => <TextInput />);

storiesOf("components/Task", module).add("default", () => (
	<Task>Default Task component</Task>
));

storiesOf("pages/Tasks", module).add("default", () => (
	<Container>
		<Task>first todo</Task>
		<Task>second todo</Task>
		<Task>third todo</Task>
	</Container>
));
