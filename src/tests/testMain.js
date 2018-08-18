const assert = require('assert');
const main = require('../main/index');
const data = require('./mainHelper/data');

describe('Интеграционные тесты', () => {

  it('1', () => {
    const res = main(data.in1);
    assert.strictEqual(res.consumedEnergy.value, 57.805 );
  });

  it('2', () => {
    const res = main(data.in2);
    assert.strictEqual(res.consumedEnergy.value, 38.939 );
  })
});
