var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');
var React = require('react');
var HelloWorld = require('/javascripts/Challenges.jsx');

React.render(
    <HelloWorld />,
    document.getElementById('job-post')
);
