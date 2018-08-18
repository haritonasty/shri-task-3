const assert = require('assert');
const Hour = require('../main/components/hour');
const convertRates = require('./hours/convertRatesToHours');
const convertHours = require('./hours/convertHoursToPeriods');


describe('Конвертация Rates  в часы', () => {

  it('С пустыми девайсами', () => {
    assert.deepEqual(Hour.convertRatesToHoursConsiderDevices24(convertRates.ratesValid, convertRates.maxPower, convertRates.devices0), convertRates.devices0Answer);
  });

  it('С непустыми девайсами', () => {
    assert.deepEqual(Hour.convertRatesToHoursConsiderDevices24(convertRates.ratesValid, convertRates.maxPower, convertRates.devices2), convertRates.devices2Answer);
  });
});

describe('Получение всех возможных периодов для данного девайса в данном расписании', () => {

  it('Периоды для девайса в дневное время с учетом занятых часов', () => {
    assert.deepEqual(Hour.getPeriodsFilteringByPower(convertHours.hours, convertHours.device).length, 2);
  })
});