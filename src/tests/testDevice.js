const assert = require('assert');
const Device = require('../main/components/device');
const hoursSets = require('./hours/hoursSets');
const test24devices = require('./device/test24devices');
const testNot24devices = require('./device/testNot24devices');
const validDevices = require('./device/validDevices');


describe('Проверка генерации часов для входящих mode-режимов', () => {


  it('Генерация часов для mode = \'day\'', () => {
    assert.deepStrictEqual(Device.getPossibleHours('day'), hoursSets.daySet);
  });

  it('Генерация часов для mode = \'night\'', () => {
    assert.deepStrictEqual(Device.getPossibleHours('night'), hoursSets.nightSet);
  });

  it('Генерация часов  для mode = undefined', () => {
    assert.deepStrictEqual(Device.getPossibleHours(), hoursSets.undefinedSet);
  });

});

describe('Получение круглосуточных устройств из всех', () => {

  it('В списке устройств 0 круглосуточных', () => {
    assert.deepStrictEqual(Device.getDevices24(test24devices.devices0), test24devices.devices0Answer);
  });


  it('В списке устройств 2 круглосуточных', () => {
    assert.deepStrictEqual(Device.getDevices24(test24devices.devices2), test24devices.devices2Answer);
  });

});

describe('Получение некруглосуточных устройств, сортированных по мощности', () => {


  it('В списке устройств 2 некруглосуточных', () => {
    assert.deepStrictEqual(Device.getSortingRemainingDevices(testNot24devices.devices), testNot24devices.devicesAnswer);
  });

});

describe('Проверка корректности создания сущностей устройств', () => {


  it('Создание инстансов всех валидных устройств', () => {
    assert.strictEqual(Device.createDevices(validDevices.validAll).length, 3);
  });

  it('Создание инстансов всех невалидных устройсв', () => {
    assert.deepStrictEqual(Device.createDevices(validDevices.invalidAll), []);
  });

});