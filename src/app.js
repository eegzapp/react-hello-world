
// entry point

import React from 'react';
import ReactDOM from 'react-dom';

var MyButton = React.createClass({
    render: function() {
        return (
            <div>
                <button onClick={this.props.clickFunc}>Press Me</button>
            </div>
        );
    }
});


var MyOutput = React.createClass({
    render: function() {
        return (
            <span>{this.props.counterVal}</span>
        )
    }
});

var ReactRoot = React.createClass({
    handleClick: function() {
        console.log('click!');
        this.setState({counter: ++this.state.counter});
    },
    getInitialState: function() {
        return {counter:0};
    },
    render: function() {
        return (
            <div>
                <MyButton clickFunc={this.handleClick}/>
                <MyOutput counterVal={this.state.counter}/>
            </div>
        )
    }
});

//ReactDOM.render(<HelloMessage />, document.getElementsByTagName("blah")[0]);
ReactDOM.render(<ReactRoot />, document.getElementById("react-root"));

