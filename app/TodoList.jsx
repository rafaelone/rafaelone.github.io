import React, {Component} from 'react';
import {render} from 'react-dom';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [{
				title: 'Comer hamburguer',
				done:false
			}]
		};
	}
	render(){
		const { todos } = this.state;
		return <ul className="todos">
			{todos.map( (todo, idx) => (
				 <li key={idx}>{todo.title}</li>
			))}
		</ul>
		
	}
}
export default TodoList;
