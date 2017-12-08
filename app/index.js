import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Tasks from "./pages/Tasks";
import Header from "./components/Header";
import TaskClear from "./components/TaskClear";
import TaskEntry from "./components/TaskEntry";
import Container from "./shared/Container";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentItemID: 4,
			openItems: [
				{ id: 0, content: "Ut non commodo laborum minim." },
				{
					id: 1,
					content:
						"Et ad commodo esse nisi enim tempor eiusmod amet cillum aute."
				},
				{ id: 2, content: "Magna eu Lorem est pariatur enim." },
				{
					id: 3,
					content:
						"Ex pariatur et nostrud id Lorem consequat aliqua aliquip nostrud."
				}
			],
			completedItems: []
		};
		this.createItem = this.createItem.bind(this);
		this.openItem = this.openItem.bind(this);
		this.completeItem = this.completeItem.bind(this);
		this.updateAppState = this.updateAppState.bind(this);
		this.clearCompletedTasks = this.clearCompletedTasks.bind(this);
	}
	createItem({ content }) {
		this.setState(prevState => ({
			currentItemID: prevState.currentItemID + 1,
			openItems: [
				...prevState.openItems,
				{ id: prevState.currentItemID, content }
			]
		}));
	}
	openItem({ id: openedID }) {
		this.setState(({ completedItems, openItems }) => {
			const newCompletedItems = [...completedItems];
			const openedItemIndex = newCompletedItems
				.map(({ id }, i) => ({
					id,
					index: i
				}))
				.filter(({ id }) => openedID === id);
			if (openedItemIndex.length) {
				const [openedItem] = newCompletedItems.splice(
					openedItemIndex[0].index,
					1
				);
				return {
					openItems: [...openItems, openedItem],
					completedItems: newCompletedItems
				};
			}
		});
	}
	completeItem({ id: completedID }) {
		this.setState(({ completedItems, openItems }) => {
			const newOpenItems = [...openItems];
			const completedItemIndex = newOpenItems
				.map(({ id }, i) => ({ id, index: i }))
				.filter(({ id }) => completedID === id);
			if (completedItemIndex.length) {
				const [completedItem] = newOpenItems.splice(
					completedItemIndex[0].index,
					1
				);
				return {
					openItems: newOpenItems,
					completedItems: [...completedItems, completedItem]
				};
			}
		});
	}
	clearCompletedTasks() {
		this.setState(prevState => ({ completedItems: [] }));
	}
	updateAppState({ content, id, mode }) {
		this[mode]({ id, content });
	}
	render() {
		return (
			<Router>
				<Container>
					<Header />
					<Route
						exact
						path="/"
						render={() => [
							<Tasks
								items={this.state.openItems}
								currentItemID={this.state.currentItemID}
								updateAppState={this.updateAppState}
								ref={n => (this.Tasks = n)}
							/>,
							<TaskEntry
								createItem={({ content }) => this.Tasks.addTask({ content })}
							/>
						]}
					/>
					<Route
						path="/completed"
						render={() => [
							<Tasks
								items={this.state.completedItems}
								updateAppState={this.updateAppState}
								ref={n => (this.CompletedTasks = n)}
								completed
							/>,
							<TaskClear onClick={() => this.CompletedTasks.clearTasks()} />
						]}
					/>
				</Container>
			</Router>
		);
	}
}
