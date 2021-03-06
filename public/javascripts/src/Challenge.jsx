var React = require('react');
var Challenges = require('./Challenges.jsx');
var FbApp = require('../../../fire.js');
var _ = require('underscore');

var Challenge = React.createClass({
  ed: function(val){

    console.log("Got Ed ",val);
  },
  handleClick: function(val){
    console.log("Clicked ",val);
  },
  render: function(){
    var that = this;
    var createItem = function(item, index) {
     return (
       <tr key={index}>
         <td >{item.user}</td>
         <td>{item.rating}</td>
         <td>{item.time}</td>
         <td><button type="btn" className="btn btn-info" onClick = {that.handleClick.bind(null,56)}>Let's Go</button></td>
       </tr>
     ) ;
   };
   return (

       <table className = "table table-striped">
       <thead>
        <tr onClick={this.props.onRowClick}>
          <th>User</th>
          <th>Rating</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        { this.props.items.map(createItem) }
      </tbody>

       </table>



   );
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
    FbApp.database().ref().child('challenges').on('child_added', function(snap){
      console.log("Snap ",snap.val());
      console.log(this.state.items);
      this.state.items.push(snap.val());
      this.setState({
        items: this.state.items
      });
    }.bind(this));

    FbApp.database().ref().child('challenges').on('child_removed', function(snap){
      var that = this;
      if(snap.val()!=null){
        var object = snap.val();

        this.state.items = _.without(this.state.items, _.findWhere(this.state.items,{user: object.user}));
        this.setState({
          items: this.state.items
        });
      }

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
  edit: function(){
    alert("Edit clicked");
  },
  render: function(){
    return (
      <div>
        <Challenge items={this.state.items} onRowClick={this.edit} />
      </div>
    );
  }
});
