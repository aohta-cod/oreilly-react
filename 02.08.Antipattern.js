var TextAreaCounter = React.createClass({
  propTypes: {
    defaultText: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      defaultText: '',
    };
  },

  getInitialState: function() {
    return {
      text: this.props.defaultText,
    }
  },

  _textChange: function(ev) {
    this.setState({
      text: ev.target.value,
    });
  },

  render: function(){
    return React.DOM.div(
      null,
      React.DOM.textarea({
        value: this.state.text,
        onChange: this._textChange,
      }),
      React.DOM.h3(null, this.state.text.length)
    );
  }
});

ReactDOM.render(
  React.createElement(TextAreaCounter, {
    defaultText: "Bob",
  }),
  document.getElementById("app")
);