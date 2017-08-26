import React, {Component} from 'react';//ES2015
// cons Reac = require('react');  CommonsJs
import { render } from 'react-dom';
import 'normalize.css';
import './main.css';
import TodoList from './TodoList.jsx'
// Arrow function ()=>
//function() {return (); }
//const App = () =>( //React stateless component
//	<div className="app">
//		<h1>Hello World!!</h1>
//	</div>
//	);

class App extends Component{
	//Props == read-only
	//state == {}
	constructor(props){
		super(props);
		this.state = {
			mensagem: "Hello world"
		};
	}

	clickHandle(){
		this.setState({mensagem: 'Hello Batuta !!'})
	}

	render(){
		return (
			<div onClick={this.clickHandle.bind(this)} className="app">
		<h1>Hello World!!</h1>
		<h1>{this.state.mensagem}</h1>
		<TodoList/>
	</div>
		);
	}
}
render (<App />, document.getElementById('app'));