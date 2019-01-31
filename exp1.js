console.log('App.js running...');

var template = React.createElement(
    "p",
    null,
    "This is something new!"
  );
var appRood = document.getElementById('app');

ReactDOM.render(template, appRood);