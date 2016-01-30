/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/psu              ->  index
 * POST    /api/psu              ->  create
 * GET     /api/psu/:id          ->  show
 * PUT     /api/psu/:id          ->  update
 * DELETE  /api/psu/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var Psu = require('./psu.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Psus
export function index(req, res) {
  Psu.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Psu from the DB
export function show(req, res) {
  Psu.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Psu in the DB
export function create(req, res) {
  Psu.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Psu in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Psu.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Psu from the DB
export function destroy(req, res) {
  Psu.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
