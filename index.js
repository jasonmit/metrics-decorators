/* jshint node: true */
'use strict';

module.exports = {
  name: 'metrics-decorators',

  included: function included() {
    this._super && this._super.included.apply(this, arguments);

    var babel = this.app.options.babel || {};
    var isConfigured = babel.optional && ~babel.optional.indexOf('es7.decorators');

    if (!isConfigured) {
      throw new Error('[metrics-decorators] must configure babel to support es7.decorators.\nSee http://github.com/jasonmit/metrics-decorators/README.md');
    }
  }
};
