'use strict';

describe('Directive: singleArticle', function () {

  // load the directive's module
  beforeEach(module('nytAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<single-article></single-article>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the singleArticle directive');
  }));
});
