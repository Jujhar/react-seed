﻿var React = require('react');
var ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
    render(){
        return (
            <div>Cats and dogs</div>
    );
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("react"))