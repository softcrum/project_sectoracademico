'use strict';

describe('Controller: VersionCtrl', function () {

  // load the controller's module
  beforeEach(module('projectSectoracademicoApp'));

  var VersionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VersionCtrl = $controller('VersionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
