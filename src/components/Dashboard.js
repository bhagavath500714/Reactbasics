import React, { Component } from 'react';
import axios from 'axios';
import Parent from '../components/Parent';
import Header from '../components/Header';
import Form from '../components/Form';
import uuid from 'uuid';


export class Dashboard extends Component {

  state = {
    todos: []
    // todos: [
    //   {
    //     id: uuid.v4(),
    //     title: 'take out the trash',
    //     completed: false
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: 'take out the trash1',
    //     completed: true
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: 'take out the trash2',
    //     completed: false
    //   }
    // ]
  }
   // Toggle Complete
  markComplete = (id) => {
    //console.log(id)
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    //console.log(id)
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    //console.log(title)
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  } 

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    // .then(res => console.log(res.data))
    .then(res => this.setState({ todos: res.data }))
  }

  render() {
    //console.log(this.state.todos)
    return (
      <div>
        <Header />
        <Form addTodo={this.addTodo} />
        <Parent todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    )
  }
}

export default Dashboard;
