ReactDOM.render(
  React.DOM.h1(
    {id: "my-heading"},
    React.DOM.span(null,
      React.DOM.em(null, "Hell"),
      "o"
    ),
    " world!"
  ),
  document.getElementById("app")
);

// <!-- JSX -->
// ReactDOM.render(
//   <h1 id="my-heading">
//     <span><em>Hell</em>o</span> world!
//   </h1>,
//   document.getElementById("app")
// );