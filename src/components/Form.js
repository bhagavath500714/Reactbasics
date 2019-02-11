import React, { Component } from 'react'

export class Form extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit} style={{ display: 'flex', margin: '15px 0px' }}>
                    <input
                        type="text"
                        name="title"
                        style={{ flex: '10', padding: '5px' }}
                        placeholder="Add Todo ..."
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-info ml-3"
                        style={{ flex: '1' }}
                    />
                </form>
            </div>
        )
    }
}

export default Form
