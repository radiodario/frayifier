/* Add HTML + CSS to setup page for functional testing */
require('../helper').loadAssets();

/* Require file to test */
var frayifier = require('../../src/scripts/frayifier');

/* Start Test */
describe('frayifier module can ', function () {

    it('print the sum to the dom', function () {
        new frayifier().write([1,2,3]);

        expect(document.getElementById('demo-functional').innerHTML).toBe('6');

    });

});