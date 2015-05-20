/* Add HTML + CSS to setup page for functional testing */
require('../helper').loadAssets();

/* Require file to test */
var frayifier = require('../../src/scripts/frayifier');

/* Start Test */
describe('frayifier module can ', function () {

    it('sum an array of numbers', function () {

        expect(new frayifier().sum([1,2,3])).toBe(6);

    });

    it('version is attached', function () {

        expect(new frayifier().version).toBe('0.0.0');

    });

});