'use strict';

describe('Controller: ReminderCtrl', function () {

  // load the controller's module
  beforeEach(module('projectSectoracademicoApp'));

  var ReminderCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReminderCtrl = $controller('ReminderCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
