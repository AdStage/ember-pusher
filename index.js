/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-pusher',

  contentFor: function (type, config) {
    if (type === 'head-footer') {
      return '<script src="//js.pusher.com/3.0/pusher.min.js"></script>';
    }
  }
};
