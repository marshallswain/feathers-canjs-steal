'use strict';

var can = require('can/');
var homeStache = require('./home.stache!');

module.exports = can.Component.extend({
	tag: 'sc-home',
	template: homeStache,
	scope: {}
});