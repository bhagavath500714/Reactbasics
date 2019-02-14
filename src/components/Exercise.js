import React, { Component } from 'react'

export class Exercise extends Component {
    constructor( props ) {
        super( props )
        this.state = { show: false };

        this.toggleDiv = this.toggleDiv.bind(this)
    }

    toggleDiv = () =>{
        const { show } = this.state;
        this.setState( { show: !show })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Exercise</h1>
                <button onClick={ this.toggleDiv }>Toggle div</button>
                { this.state.show && <Box /> }
            </React.Fragment>
        )
    }
}

class Box extends Component{
    render(){
        return(
            <div>This is a div</div>
        )
    }
}

export default Exercise
