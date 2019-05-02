'use strict';

module.exports = function(settings) {
  return settings.value.replace(/\s/g, '').toLowerCase();
};
