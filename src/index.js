import 'source-map-support/register';

// for promise problems with node v0.12
require('babel-polyfill');

const gitCloud = require('./gitCloud');

function main(pageUrl) {
    return gitCloud(pageUrl)
}

module.exports = main;
