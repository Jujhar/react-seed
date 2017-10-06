var React = require('react');
var ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
    render(){
        return (
            <div>Cats et dogs</div>
    );
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("react"))