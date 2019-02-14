import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class Child extends Component {
    getStyle = () => {
        // if(this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }    
        return {
            marginBottom: '3px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const {id, title } = this.props.todo;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card bg-light text-dark" style={this.getStyle()}>                        
                        <div className="d-flex align-items-center justify-content-between" style={{padding: '5px 10px'}}>
                        <div>
                        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} className="mr-3" />
                            { title}
                        </div>
                        
                            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                        </div>
                    </div>                    
                </div>
            </React.Fragment>
        )
    }
}

// PropTypes
Child.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'transparent',
    color: 'rgb(174, 176, 177)',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    fontSize: '18px',
    fontWeight: '600'
}

export default Child
