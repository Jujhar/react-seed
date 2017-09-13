class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Cats and dogs"
        );
    }
}

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById("react"));