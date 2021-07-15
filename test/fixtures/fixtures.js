const assert = require('assert');
const fs = require('fs');

const mehdown = require('../../lib');

describe('mehdown', function() {
    this.timeout(5000);

    it('actual html should match expected html', function(done) {
        var options = {
            baseUrl: 'https://meh.com',
            commands: true,
            detectImageSizes: true,
            emoji: {
                imagePathPNG: 'https://cdn.jsdelivr.net/joypixels/assets/6.6/png/unicode/64/'
            }
        };

        mehdown.render(fs.readFileSync(`${__dirname}/mehdown.md`).toString(), options, function(err, html) {
            assert.strictEqual(html.trim(), fs.readFileSync(`${__dirname}/mehdown.html`).toString().trim());
            done();
        });
    });
});
