//initiate firebase in the constructor

var SeekGame = function(){
    this.utilities = new Utilities();
    this.utilities.initiateFirebase();
    this.seekArray = [];
    
}
SeekGame.prototype.getAllSeeks = function(){
    var ref = firebase.database().ref('/seek');
    var that = this;
    ref.on('value', function(snap){
        var updates = [];
        snap.forEach(function(childSnap){
            if(childSnap.val()!=null){
                var seekObject = childSnap.val();
                updates.push(seekObject);
            }
            console.log("Child Snap ",childSnap.val());
        });
        that.seekArray = _.uniq(that.seekArray.concat(updates));//_.uniq(_.union(this.seekArray, updates), false, function(item, key, a){ return item.playerId; });
        console.log("New seeks ",that.seekArray);
    });
    
}
var seek = new SeekGame();
seek.getAllSeeks();
var co = "hi";