'use strict';

/**
 * @ngdoc directive
 * @name nytAppApp.directive:singleArticle
 * @description
 * # singleArticle
 */
angular.module('nytAppApp')
  .directive('singleArticle', function () {
    return {
      templateUrl: 'templates/singleArticle.html',
      restrict: 'E',
      replace: 'false'
    };
  });
