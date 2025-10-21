const assert = require('assert');
const { message } = require('./index.js');

describe('Hello World Application', function() {
    describe('Message Verification', function() {
        it('should return correct hello world message', function() {
            assert.strictEqual(message, "Hello World from CI/CD Pipeline!");
        });

        it('should have non-empty message', function() {
            assert.strictEqual(typeof message, 'string');
            assert.strictEqual(message.length > 0, true);
        });
    });
});
