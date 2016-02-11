'use strict';

/**
 * @ngdoc filter
 * @name nytAppApp.filter:cut
 * @function
 * @description
 * # cut
 * Filter in the nytAppApp.
 */
angular.module('nytAppApp')
  .filter('cut', function () {
    return function (input) {
      var result = input.substring(0, 10);
      var day = result.substring(8, 10);
      var month = result.substring(5, 7);

      //convert two digit month format to full month name
      switch (parseInt(month)) {
        case 1:
        month = 'January';
          break;
        case 2:
        month = 'February';
          break;
        case 3:
        month = 'April';
          break;
        case 4:
        month = 'March';
          break;
        case 5:
        month = 'May';
          break;
        case 6:
        month = 'June';
          break;
        case 7:
        month = 'July';
          break;
        case 8:
        month = 'August';
          break;
        case 9:
        month = 'September';
          break;
        case 10:
        month = 'October';
          break;
        case 11:
        month = 'November';
          break;
        case 12:
        month = 'December';
          break;
      }
      var year = result.substring(0, 4);
      result = day + ' ' + month + ' ' + year;
      return result;
    };
  });
