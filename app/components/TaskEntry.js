import React from "react";
import styled from "styled-components";
import TextInput from "../shared/TextInput";

const EntryWrapper = styled.footer`
	padding: 1em 0 0;
`;

export default class TaskEntry extends React.Component {
	constructor() {
		super();
		this.handleTaskEntry = this.handleTaskEntry.bind(this);
	}
	handleTaskEntry(event) {
		event.preventDefault();
		const input = document.getElementById("task_input");
		const content = input.value;
		input.value = "";
		this.props.createItem({
			content
		});
	}
	render() {
		return (
			<EntryWrapper>
				<form id="task_entry" onSubmit={this.handleTaskEntry}>
					<TextInput
						placeholder="Enter todo here"
						name="task_input"
						id="task_input"
					/>
				</form>
			</EntryWrapper>
		);
	}
}
