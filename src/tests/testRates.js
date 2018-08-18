const assert = require('assert');
const Rate = require('../main/components/rate');
const testRates = require('./rate/validRates');
const rates = require('./rate/durations');

describe('Создание rates', () => {
  it('Проверка корректности создания сущностей Rates', () => {
    assert.deepEqual(Rate.createRates(testRates.ratesInput).length , testRates.ratesInput.length);
  })
});

describe('Получание продолжительности rate', () => {

  it('Расчета длительности, когда значение from меньше to', () => {
    assert.strictEqual(rates.rate1.getDuration(), 3);
  });

  it('Расчета длительности, когда значение from больше to', () => {
    assert.strictEqual(rates.rate2.getDuration(), 4);
  });

  it('Расчета длительности, когда значение from равно to', () => {
    assert.strictEqual(rates.rate3.getDuration(), 24);
  });
});