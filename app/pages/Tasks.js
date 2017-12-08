import React from "react";
import styled from "styled-components";

import Task from "../components/Task";
import Container from "../shared/Container";
import { slugify } from "../utils/functions";
import { theme } from "../utils/settings";

const EmptyMessage = styled.p`
	color: ${theme.colors.text};
	text-align: center;
`;

export default class Tasks extends React.Component {
	constructor() {
		super();
		this.state = { items: [] };
		this.addTask = this.addTask.bind(this);
		this.clearTasks = this.clearTasks.bind(this);
	}
	componentDidMount() {
		this.setState(prevState => ({
			items: [...prevState.items, ...this.props.items]
		}));
	}
	addTask({ content }) {
		this.setState(
			prevState => ({
				items: [...prevState.items, { id: this.props.currentItemID, content }]
			}),
			() =>
				this.props.updateAppState({
					content,
					id: this.props.currentItemID,
					mode: "createItem"
				})
		);
	}
	clearTasks() {
		this.setState(
			prevState => ({ items: [] }),
			() => {
				this.props.updateAppState({ mode: "clearCompletedTasks" });
			}
		);
	}
	render() {
		return (
			(this.state.items.length &&
				this.state.items
					.sort(({ id: aID }, { id: bID }) => aID > bID)
					.map(task => (
						<Task
							key={slugify(task.content)}
							taskID={task.id}
							updateTasksState={this.props.updateAppState}
							inCompletedView={this.props.completed}
						>
							{task.content}
						</Task>
					))) || <EmptyMessage>No todo items</EmptyMessage>
		);
	}
}
