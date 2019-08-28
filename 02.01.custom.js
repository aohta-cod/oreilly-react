var Component = React.createClass({
  render: function(){
    return React.DOM.span(null, "Custom Component");
  }
});

// ReactDOM.render(
//   React.createElement(Component),
//   document.getElementById("app")
// );

var ComponentFactory = React.createFactory(Component);

// ReactDOM.render(
//   ComponentFactory(),
//   document.getElementById("app")
// );

ReactDOM.render(
  React.createElement("span", null, "Hello"),
  document.getElementById("app")
)