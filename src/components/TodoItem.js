import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component{
	getstyle = () => {
		return {
			// background: '#f4f4f4'
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}


	// markComplete = (e) => {
	// 	console.log(this.props)
	// }


	render() {
		const {	id, title } = this.props.todo;
		return (
			<div style={this.getstyle()}>
			<p>
			<input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {'  '}
			{ title }
			<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
			</p>
			</div>
			)
	}
} 



//PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete : PropTypes.func.isRequired,
	delTodo : PropTypes.func.isRequired, 
}


const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 10px',
	borderRadius:'50%',
	cursor: 'pointer',
	float: 'right',
}


// const itemstyle={
// 	backgroundColor: '#f4f4f4'
// }

export default TodoItem