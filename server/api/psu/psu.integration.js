'use strict';

var app = require('../..');
import request from 'supertest';

var newPsu;

describe('Psu API:', function() {

  describe('GET /api/psu', function() {
    var psus;

    beforeEach(function(done) {
      request(app)
        .get('/api/psu')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          psus = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      psus.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/psu', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/psu')
        .send({
          name: 'New Psu',
          info: 'This is the brand new psu!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPsu = res.body;
          done();
        });
    });

    it('should respond with the newly created psu', function() {
      newPsu.name.should.equal('New Psu');
      newPsu.info.should.equal('This is the brand new psu!!!');
    });

  });

  describe('GET /api/psu/:id', function() {
    var psu;

    beforeEach(function(done) {
      request(app)
        .get('/api/psu/' + newPsu._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          psu = res.body;
          done();
        });
    });

    afterEach(function() {
      psu = {};
    });

    it('should respond with the requested psu', function() {
      psu.name.should.equal('New Psu');
      psu.info.should.equal('This is the brand new psu!!!');
    });

  });

  describe('PUT /api/psu/:id', function() {
    var updatedPsu;

    beforeEach(function(done) {
      request(app)
        .put('/api/psu/' + newPsu._id)
        .send({
          name: 'Updated Psu',
          info: 'This is the updated psu!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPsu = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPsu = {};
    });

    it('should respond with the updated psu', function() {
      updatedPsu.name.should.equal('Updated Psu');
      updatedPsu.info.should.equal('This is the updated psu!!!');
    });

  });

  describe('DELETE /api/psu/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/psu/' + newPsu._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when psu does not exist', function(done) {
      request(app)
        .delete('/api/psu/' + newPsu._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
