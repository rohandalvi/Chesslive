var assert = require('assert');
var auth = require('../auth/auth');
var ChessGame = require('../classes/chess');
var GameBoard = require('../classes/chessboard')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
  describe('#equality()', function(){
      it('should return if two numbers are equal', function(){
          assert.equal(1,2==2);
      });
  });
  describe('#addition', function(){
      it('should return addition of two numbers', function(){
          assert.equal(6,3+3);
      });
  });
  describe('#subtraction', function(){
      it('should return subtraction of two numbers', function(){
          assert.equal(0,3-3);
      });
  });
  describe('#register', function(){
      it('should be able to register a new user', function(){
          auth.register("rohan_dalvi@me.com","rohan123").then(function(){
              assert.notEqual(null,auth.getCurrentUser());
              done();
          }, function(error){
              assert.equal(null,auth.getCurrentUser());
              done();
          });
      });
  });
});
describe('ChessCore', function(){
    describe('#gameInit', function(){
        it('should initialize a new game of chess in chessjs', function(){
            var game = new ChessGame();
            assert.notEqual(null, game.getGame());
        });
    });
    describe('#gameOver', function(){
        it('test the status of game', function(){
            var game = new ChessGame();
            assert.equal(false, game.gameOver());

            //now lets load some fen
            var fen = '4k3/4P3/4K3/8/8/8/8/8 b - - 0 78';
            game.loadFen(fen);
            assert.equal(true, game.gameOver());
        });
    });
});
