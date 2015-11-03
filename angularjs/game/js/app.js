'use strict';
/* App Controllers */


var memoryGameApp = angular.module('memoryGameApp', []);

memoryGameApp.factory('game', function() {
  var tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
    'that-guy', 'zeppelin'];
  return new Game(tileNames);
});


memoryGameApp.controller('GameCtrl',function GameCtrl($scope, game, $timeout) {
  $scope.game = game;
  $scope.counter = 0;
  $scope.onTimeout = function(){
      $scope.counter++;
      mytimeout = $timeout($scope.onTimeout,1000);
  }
  var mytimeout = $timeout($scope.onTimeout,1000);
  $scope.check = function(a){
    if (a == 0) {
      $timeout.cancel(mytimeout);
    };
  }
});


//usages:
//- in the repeater as: <mg-card tile="tile"></mg-card>
//- card currently being matched as: <mg-card tile="game.firstPick"></mg-card>