  'use strict';

/**
 * @ngdoc function
 * @name nytAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nytAppApp
 */
angular.module('nytAppApp')
  .controller('AboutCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //to incriment page number
    $scope.nextPage = function(){
      $scope.pageNum++;
    };
    //to decriment page number
    $scope.prevPage = function(){
      if($scope.pageNum > 1){
        $scope.pageNum--;
      }
    };
    //pre-set sorting to oldest
    $scope.sortOldNew = 'oldest';
    //pre-set page to 1
    $scope.pageNum = 1;

    //get data from NYT api call
    $scope.updateContent = function(){
      if(!$scope.query){
        //if search field is empty dont make api call
        return null;
      }else{
        //pre-set vars to empty strings so they dont effect the ulr if undefined
        var dateFromString = '';
        var dateToString = '';
        if($scope.dateFrom){
          dateFromString = '&begin_date=' + formatDate($scope.dateFrom);
        }
        if($scope.dateTo){
          dateToString = '&end_date=' + formatDate($scope.dateTo);
        }
        $http.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + $scope.query + '&page=' + $scope.pageNum + '&sort=' + $scope.sortOldNew + dateFromString + dateToString + '&api-key=121d2a3323a92fbced7ee803159ffc6f:14:74207778').success(function(data) {
          $scope.queryResult = data.response.docs;
          console.log($scope.queryResult);
        });
      }
    };

    //format date to use it in api call
    var formatDate = function(inputString){
      var month = inputString.toString().substring(4,7);
      month = matchMonth(month);
      var day = inputString.toString().substring(8,10);
      var year = inputString.toString().substring(11,15);
      return year+month+day;
    };

    //function to convert Short Form Month in two digit number
    var matchMonth = function(month){
      if(month==='Jan'){
        return '01';
      }else if(month==='Feb'){
        return '02';
      }else if(month==='Mar'){
        return '03';
      }else if(month==='Apr'){
        return '04';
      }else if(month==='May'){
        return '05';
      }else if(month==='Jun'){
        return '06';
      }else if(month==='Jul'){
        return '07';
      }else if(month==='Aug'){
        return '08';
      }else if(month==='Sep'){
        return '09';
      }else if(month==='Oct'){
        return '10';
      }else if(month==='Nov'){
        return '11';
      }else if(month==='Dec'){
        return '12';
      }
    };
  });
