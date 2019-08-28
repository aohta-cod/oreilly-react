// var Component = React.createClass({
//   propTypes: {
//     name: React.PropTypes.string.isRequired,
//   },
//   render: function(){
//     return React.DOM.span(null, "Hello, I'm " + this.props.name + ".");
//   }
// });

// ReactDOM.render(
//   React.createElement(Component, {
//     name: 123,//"Bob",
//   }),
//   document.getElementById("app")
// );

//var text = 'text' in this.props ? this.props.text: '';

var Component = React.createClass({
  propTypes: {
    firstName: React.PropTypes.string.isRequired,
    middleName: React.PropTypes.string,
    familyName: React.PropTypes.string.isRequired,
    address: React.PropTypes.string,
  },
  getDefaultProps: function() {
    return {
      middleName: '',
      address: '-',
    };
  },
  render: function(){
    return React.DOM.span(
      null, 
      "Hello, I'm " + this.props.firstName + " " + this.props.middleName + " " +this.props.familyName +". ",
      "Please send your mail to: " + this.props.address
    );
  }
});

ReactDOM.render(
  React.createElement(Component, {
    firstName: "Bob",
    familyName: "James",
    address: 'California'
  }),
  document.getElementById("app")
);