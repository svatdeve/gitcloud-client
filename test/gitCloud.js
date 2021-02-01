const gitCloud = require('./../lib/index');
const chai = require('chai');
const expect = chai.expect;

function checkIndex(index) {
    const containsCat = index.some(element => {
        return element.url.includes('/cat');
    });

    expect(containsCat).to.be.equal(true, 'One of the paths should contain"/cat"');
}

describe('GitCloud Client', function () {
    this.timeout(10000);

    it('Can get the index', function (done) {
        gitCloud('http://jiahaog.github.io/gitcloud')
            .then(fileIndex => {
                checkIndex(fileIndex);
                done()
            })
            .catch(done);
    })

});
