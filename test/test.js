import {assert} from 'chai';

import {clean, cleanOneDigit, displayNumber, result} from '../public/main.js';

describe('Calculator function', function() {
    it('should return undefined', function() {
        assert.equal(result.value, undefined);
    }
    );
  });