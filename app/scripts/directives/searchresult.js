'use strict';

/**
 * @ngdoc directive
 * @name nytAppApp.directive:searchResult
 * @description
 * # searchResult
 */
angular.module('nytAppApp')
  .directive('searchResult', function () {
    return {
      templateUrl: 'templates/searchResult.html',
      restrict: 'E',
      replace: 'false'
    };
  });
