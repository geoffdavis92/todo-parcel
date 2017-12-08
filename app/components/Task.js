import React from "react";
import styled from "styled-components";

import Checkbox from "../shared/Checkbox";
import { ToDo } from "../utils/classes";
import { slugify } from "../utils/functions";
import { theme } from "../utils/settings";

const ToDoWrapper = styled.article`
	border-bottom: 1px solid ${theme.colors.border_light};
	font-family: "Roboto", sans-serif;
	font-size: 20px;
	line-height: 1;
	padding: 0.8em 0 0.8em;
	&:first-child {
		padding-top: 0;
	}
	&:last-child {
		border-bottom-color: transparent;
		padding-bottom: 0;
	}
`;
const ToDoContent = styled.label`
	display: inline-block;
	margin: auto auto auto 0.5em;
	user-select: none;
	vertical-align: middle;
`;

export default class Task extends React.Component {
	constructor() {
		super();
		this.state = { checked: false, completed: false };
		this.toggleCheckbox = this.toggleCheckbox.bind(this);
	}
	componentDidMount() {
		this.props.inCompletedView &&
			this.setState(prevState => ({
				checked: this.props.inCompletedView,
				completed: this.props.inCompletedView
			}));
	}
	toggleCheckbox() {
		this.setState(
			prevState => ({
				checked: !prevState.checked,
				completed: !prevState.checked
			}),
			() => {
				this.props.updateTasksState({
					id: this.props.taskID,
					mode: this.props.inCompletedView ? "openItem" : "completeItem"
				});
			}
		);
	}
	render() {
		return (
			<ToDoWrapper onClick={this.toggleCheckbox}>
				<Checkbox
					id={slugify(this.props.children)}
					name={slugify(this.props.children)}
					checked={this.state.checked}
				/>
				<ToDoContent
					htmlFor={slugify(this.props.children)}
					onClick={this.toggleCheckbox}
				>
					{this.props.children}
				</ToDoContent>
			</ToDoWrapper>
		);
	}
}
