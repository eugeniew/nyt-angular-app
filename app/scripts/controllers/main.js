'use strict';

/**
 * @ngdoc function
 * @name nytAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nytAppApp
 */
angular.module('nytAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.updateContent = function(name){
      $scope.section = name;
      $http.get('http://api.nytimes.com/svc/topstories/v1/' + $scope.section + '.json?api-key=149f1ed5f9a388bca1ec731cd2c96d52:16:74207778').success(function(data) {
        $scope.articles = data.results;
      });
    };
  });
