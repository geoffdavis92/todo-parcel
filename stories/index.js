import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import Checkbox from "../app/components/Checkbox";
import TextInput from "../app/components/TextInput";

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

storiesOf("components/Checkbox", module)
	.add("unchecked", () => <Checkbox />)
	.add("checked", () => <Checkbox checked />);

storiesOf("components/TextInput", module).add("default", () => <TextInput />);
