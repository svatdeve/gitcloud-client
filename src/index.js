import 'source-map-support/register';

const gitCloud = require('./gitCloud');

function main(pageUrl) {
    return gitCloud(pageUrl)
}

module.exports = main;
