var React = require('react');
module.exports = React.createClass({
render: function(){
  console.log("this ",this);
  return (
    <p>{this.props.id}</p>
  );
}
});
