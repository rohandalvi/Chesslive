var ChessBoard = require('../node_modules/chessboardjs/www/js/chessboard');
module.exports = GameBoard;
//constructor for chessboard, provide div id
function GameBoard(id){
    this.id = id;
    this.board = ChessBoard(id);
}
//constructor to provide div id with a position to display.
// for example, ChessBoard('board',ruyLopez) will display a ruyLopez position on div id = 'board'
// the position could also be a position object

GameBoard.prototype.updatePosition = function(position){
    this.position = position;
    this.board.position(position); //position can be either a position object or fen string
}
GameBoard.prototype.setConfiguration = function(cfg){
    this.board = ChessBoard(this.id, cfg);
}
GameBoard.prototype.setOrientation = function(orientation){
    this.board.orientation(orientation);
}
GameBoard.prototype.destroyBoard = function(){
    this.board.destroy;
}
GameBoard.prototype.move = function(move){
    this.board.move(move);
}
