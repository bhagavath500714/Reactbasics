import React, { Component } from 'react';
import Sample from '../components/Sample';

export class Exercise extends Component {
    constructor( props ) {
        super( props )
        this.state = {
          show: false,
          title: 'App title'

         };

        this.toggleDiv = this.toggleDiv.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    toggleDiv = () =>{
        const { show } = this.state;
        this.setState( { show: !show })
    }

    onClick() {
      // alert('Clicked');
      this.setState({
        title: 'New App Title'
      });
    }

    onChange(event) {
        console.log(event.target.value);
    }

    onSubmit(event) {
      event.preventDefault();

      console.log(this.input.value);
    }

    render() {
      const title = 'Title \'s app';
      const anotherTitle = 'Another title';
      const list = [
        'Item 1',
        'Item 2',
        'Another item',
      ];
        return (
            <React.Fragment>
                <h1>Exercise</h1>
                <button onClick={ this.toggleDiv }>Toggle div</button>
                { this.state.show && <Box /> }
                <h1>
                    {title}
                </h1>
                <h2>
                {
                  false ? anotherTitle : title
                }
                </h2>
                <h3>
                  {
                    list.map(item => {
                      return(
                        <div key={item} onClick={this.onClick}>{item}</div>
                      )
                    })
                  }
                </h3>
                <input onChange={this.onChange} />
                <form onSubmit={this.onSubmit}>
                  <input ref={input => this.input = input} />
                </form>
                <h4>{this.state.title}</h4>
                <div onClick={this.onClick}>click here</div>
                <Sample
                title="This is new title" 
                onClick = {this.onClick}
                />
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
