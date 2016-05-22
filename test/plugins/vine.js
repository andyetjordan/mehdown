const assert = require('assert');

const mehdown = require('../../lib');

describe('vine', function() {
    it('https://vine.co/v/hWZ9mbJZaKE', function(done) {
        mehdown.render('https://vine.co/v/hWZ9mbJZaKE', function(err, html) {
            assert.equal(html, '<p><iframe allowfullscreen class="vine" frameborder="0" src="https://vine.co/v/hWZ9mbJZaKE/embed/simple"></iframe></p>');
            done();
        });
    });

    it('https://vine.co/v/eLnKWtjTJup', function(done) {
        mehdown.render('https://vine.co/v/eLnKWtjTJup', function(err, html) {
            assert.equal(html, '<p><iframe allowfullscreen class="vine" frameborder="0" src="https://vine.co/v/eLnKWtjTJup/embed/simple"></iframe></p>');
            done();
        });
    });

    it('https://vine.co/v/eLnKWtjTJup/embed', function(done) {
        mehdown.render('https://vine.co/v/eLnKWtjTJup/embed', function(err, html) {
            assert.equal(html, '<p><iframe allowfullscreen class="vine" frameborder="0" src="https://vine.co/v/eLnKWtjTJup/embed/simple"></iframe></p>');
            done();
        });
    });

    it('https://vine.co/v/eLnKWtjTJup/similar', function(done) {
        mehdown.render('https://vine.co/v/eLnKWtjTJup/similar', function(err, html) {
            assert.equal(html, '<p><iframe allowfullscreen class="vine" frameborder="0" src="https://vine.co/v/eLnKWtjTJup/embed/simple"></iframe></p>');
            done();
        });
    });
});