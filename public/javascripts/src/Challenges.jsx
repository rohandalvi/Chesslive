var React = require('react');
var Challenge = require('./Challenge.jsx');

module.exports = React.createClass({
  // getInitialState: function(){
  //   return{
  //     data:[
  //     {
  //       id: '1',
  //       player: 'rohan_dalvi',
  //       rating: '2500',
  //       time: '3+1'
  //     },
  //     {
  //       id: '2',
  //       player: 'purva_gupte',
  //       rating: '1700',
  //       time: '1+1'
  //     }
  //     ]
  //   };
  // },
  render: function(){
  return (
    <h2>Hi</h2>
    // <div>
    //   {this.state.data.map(function(challenge){
    //   return(
    //   <Challenge
    //     id={challenge.id}
    //     player={challenge.player}
    //     rating={challenge.rating}
    //     time={challenge.time}
    //   />
    //   )
    //   })}
    // </div>
  )
  }
});
