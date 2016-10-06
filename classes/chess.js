/*
Core chess handler logic. Covers among other things :
1. game_over : tell if the game is over.
2. in_check
3. turn_to_play (white or black)

*/
var Chess = require('../node_modules/chess.js/chess').Chess;

module.exports = ChessGame;

function ChessGame(){
    this.chess = new Chess();
}
ChessGame.prototype.getGame = function(){
    return this.chess; 
}
ChessGame.prototype.gameOver = function(){
    return this.chess.game_over();
}

ChessGame.prototype.loadFen = function(fen){
    this.chess.load(fen);
}