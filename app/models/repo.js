var $ = require('jquery-browserify');
var _ = require('underscore');
var Backbone = require('backbone');
var cookie = require('../cookie');

module.exports = Backbone.Model.extend({
  constructor: function(attributes, options) {
    this.name = 'repo';

    Backbone.Model.call(this, {
      id: attributes.id,
      name: attributes.name,
      permissions: attributes.permissions,
      private: attributes.private
    });
  },

  initialize: function(attributes, options) {
  }
});