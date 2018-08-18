module.exports = class Rate {
  constructor(from, to ,value) {
    this.from = from;
    this.to = to;
    this.value = value;
  }

  getDuration() {
    return this.from < this.to ? this.to - this.from : 24 - this.from + this.to;
  }

  static createRates(rates) {
    const validRates = [];
    for (let rate of rates) if (isValidRate(rate)) validRates.push(new Rate(rate.from, rate.to, rate.value));
    return validRates;

    function isValidRate(rate) {
      if (rate.from < 0 || rate.from > 23 || !Number.isInteger(rate.from))
        throw new Error(`Во входящих тарифах есть невалидный параметр from. Допустимы только целые значения от 0 до 23`);

      if (rate.to < 0 || rate.to > 23 || !Number.isInteger(rate.to))
        throw new Error(`Во входящих тарифах есть невалидный параметр to. Допустимы только целые значения от 0 до 23`);

      if (rate.value <= 0 || typeof(rate.value) !== 'number')
        throw new Error(`Во входящих тарифах есть невалидный параметр value. Допустимы только положительные числовые значения. `);

      return true;
    }
  }
};




