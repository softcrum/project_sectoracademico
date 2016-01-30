/**
 * Psu model events
 */

'use strict';

import {EventEmitter} from 'events';
var Psu = require('./psu.model');
var PsuEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PsuEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Psu.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PsuEvents.emit(event + ':' + doc._id, doc);
    PsuEvents.emit(event, doc);
  }
}

export default PsuEvents;
