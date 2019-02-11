import React, { Component } from 'react';
import Child from '../components/Child';
import PropTypes from 'prop-types';


export class Parent extends Component {
    markComplete = () =>{
        console.log('Hello')
    } 
  render() {
      //console.log( this.props.todos)
    return this.props.todos.map((todo) => (
        <Child key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

// PropTypes
Parent.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Parent;
