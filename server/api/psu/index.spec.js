'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var psuCtrlStub = {
  index: 'psuCtrl.index',
  show: 'psuCtrl.show',
  create: 'psuCtrl.create',
  update: 'psuCtrl.update',
  destroy: 'psuCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var psuIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './psu.controller': psuCtrlStub
});

describe('Psu API Router:', function() {

  it('should return an express router instance', function() {
    psuIndex.should.equal(routerStub);
  });

  describe('GET /api/psu', function() {

    it('should route to psu.controller.index', function() {
      routerStub.get
        .withArgs('/', 'psuCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/psu/:id', function() {

    it('should route to psu.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'psuCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/psu', function() {

    it('should route to psu.controller.create', function() {
      routerStub.post
        .withArgs('/', 'psuCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/psu/:id', function() {

    it('should route to psu.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'psuCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/psu/:id', function() {

    it('should route to psu.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'psuCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/psu/:id', function() {

    it('should route to psu.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'psuCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
