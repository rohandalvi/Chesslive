var GameBoard = function(id){
    this.id = id;
    this.board = ChessBoard('board','start');
}

GameBoard.prototype.setPlayable = function(){
    var that = this;
    var cfg ={
        draggable: true,
        position: 'start',
        onMoveEnd: function(oldPos, newPos){
            console.log("Animation complete");
        },
        onDrop: that.onDrop
    };
    this.board = ChessBoard(this.id,cfg);
}

GameBoard.prototype.onMoveEnd = function(oldPos, newPos){
    var that = this;
    console.log("Animation complete");
}
GameBoard.prototype.onDrop = function(source,target,piece,newPos,oldPos,orientation){
            console.log("Dropped");
            console.log("Source ",source);
            console.log("Target ",target);
            console.log("Piece ",piece);
            console.log("oldPos ",oldPos);
            console.log("new pos",newPos);
            console.log("orientation ",orientation);
}