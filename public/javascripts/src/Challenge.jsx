var React = require('react');
var Challenges = require('./Challenges.jsx');
var FbApp = require('../../../fire.js');
var Challenge = React.createClass({
  render: function(){

    var createItem = function(item, index) {
     return <li key={ index }><h4>User: {item.user} </h4> <p>{item.rating}</p> <p>Time Control: {item.time}</p></li>;
   };
   console.log(this.props.items);
   return <ul>{ this.props.items.map(createItem) }</ul>;
  }
});
module.exports = React.createClass({
  getInitialState: function(){
    return {items: [], text: ''};
  },
  onChange: function(e){
    this.setState({text: e.target.value});
  },
  componentWillMount: function(){
    var that = this;
    FbApp.database().ref().child('challenges').on('child_added', function(snap){
      console.log("Snap ",snap.val());
      console.log(this.state.items);
      this.state.items.push(snap.val());
      this.setState({
        items: this.state.items
      });
      // that.items.push(snap.val());
      // that.setState({
      //   items: that.items
      // });
    }.bind(this));
  },
  handleSubmit: function(e){
    e.preventDefault();
    if(this.state.text){
      var nextItems = this.state.items.concat([{
        text: this.state.text
      }]);
      this.setState({
        items: nextItems,
        text: ''
      });
    }
  },
  render: function(){
    return (
      <div>
        <Challenge items={this.state.items} />

      </div>
    );
  }
});
