'use strict';

describe('Controller: SinglearticleCtrl', function () {

  // load the controller's module
  beforeEach(module('nytAppApp'));

  var SinglearticleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SinglearticleCtrl = $controller('SinglearticleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SinglearticleCtrl.awesomeThings.length).toBe(3);
  });
});
