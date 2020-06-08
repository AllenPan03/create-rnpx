var base = require('./scripts/base');
var create = require('./scripts/create');
var api = require('./scripts/api');
var init = require('./scripts/init');
var bundleExtraFiles = require('./scripts/bundleExtraFiles')
module.exports = Object.assign({}, create, base, api, init, bundleExtraFiles);

