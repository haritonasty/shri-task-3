CONSTS = {
  night: "night",
  day: "day",
  startDay: 7,
  stopDay: 21,
};

module.exports = class Device {
  constructor(id, name = '', power, duration, hours) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.duration = duration;
    this.possibleHours = hours;

  }

  static getPossibleHours(mode) {
    switch (mode) {
      case CONSTS.day:
        return generateHours(CONSTS.startDay, CONSTS.stopDay);
      case CONSTS.night:
        return generateHours(CONSTS.stopDay, CONSTS.startDay);
      default:
        return generateHours(0, 24);
    }

    function generateHours(from, to) {
      const hours = new Set();
      if (from < 0 || from > 24 || to < 0 || to > 24) throw new Error('Входящие mode для дня и ночи некорректны!');
      const duration = from < to ? to - from : 24 - from + to;
      for (let i = from, counter = 0; i < from + duration; i++, counter++) {
        const hourId = from + counter >= 24 ? i - 24 : from + counter;
        hours.add(hourId);
      }
      return hours;
    }
  }

  static getDevices24(devices) {
    return devices.filter(device => device.duration === 24);
  }

  static getSortingRemainingDevices(devices) {
    return devices.filter(device => device.duration !== 24).sort((a, b) => a.power - b.power);
  }

  static createDevices(devices) {
    const validDevices = [];
    let devicesSet = new Set();
    for (let dev of devices)
      if (this.isValidDevice(dev, devicesSet))
        validDevices.push(new Device(dev.id, dev.name, dev.power, dev.duration, this.getPossibleHours(dev.mode)));

    return validDevices;
  }

  static isValidDevice(device, set = new Set()) {

    if (device.duration <= 0 || device.duration > 24 || !Number.isInteger(device.duration)) {
      console.error(`У прибора "${device.name}" неверно задана длительность работы! Параметр duration должен быть целым числом в промежутке от 1 до 24.`);
      return false;
    }
    if (device.power <= 0 || !Number.isInteger(device.power)) {
      console.error(`У прибора "${device.name}" неверно задана мощность! Параметр power должен задаваться целым положительным числом.`);
      return false;
    }
    if (!(device.mode === CONSTS.night || device.mode === CONSTS.day || device.mode === undefined)) {
      console.error(`У прибора "${device.name}" неверно задан доступный промежуток использования! 
      Параметр mode может принимать значения ${CONSTS.day}, ${CONSTS.night}, или может быть опущен`);
      return false;
    }
    if (this.getPossibleHours(device.mode).size < device.duration) {
      console.error(`У прибора "${device.name}" длительность превышает допустимый промежуток работы! Параметр duration должен быть <= длины mode.`);
      return false;
    }
    if (set.has(device.id)) {
      console.error(`У прибора "${device.name}" дублирующий id! Параметр id у всех приборов должен быть уникальным.`);
      return false;
    } else set.add(device.id);

    return true;
  }
};
