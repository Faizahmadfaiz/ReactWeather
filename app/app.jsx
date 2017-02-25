var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="example" component={Example}/>
      <IndexRoute component={Weather}/>    
    </Route>
  </Router>,
  document.getElementById('app')
);
