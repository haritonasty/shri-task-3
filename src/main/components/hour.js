module.exports = class HourCell {
  constructor(id, power, devices = [], value = null) {
    this.id = id;
    this.value = value;
    this.devices = devices;
    this.power = power;
  }

  static isAllValues(hours) {
    for (let hour of hours) if (!hour.value) return false;
    return true;
  }

  static createHours(devices, power) {
    const hours = new Array(24);
    for (let i = 0; i < 24; i++) hours[i] = new HourCell(i, devices, power);
    return hours;
  }

  static convertRatesToHoursConsiderDevices24(rates, maxPower, devices) {
    // find remaining power for hours (remove device24's power)
    let remainingPower = maxPower;
    for (let device of devices) remainingPower -= device.power;
    if (remainingPower < 0) throw new Error('Максимально допустимая мощность слишком мала для предлагаемых устройств!');

    const hours = HourCell.createHours(remainingPower, devices);

    for (let rate of rates) {
      for (let i = rate.from, counter = 0; i < rate.from + rate.getDuration(); i++, counter++) {
        const id = rate.from + counter >= 24 ? i - 24 : rate.from + counter;
        if (hours[id].value === null) hours[id].value = rate.value; else throw new Error('Тарифы пересекаются!');
      }
    }

    if (HourCell.isAllValues(hours)) return hours; else throw new Error('Не для всех часов в сутках заданы тарифы!');
  }

  static getPeriodsFilteringByPower(hoursAll, device) {
    const chunksOfHours = [];
    let part = [];
    let hourId = null;
    for (let hour = 0; hour < 24 + device.duration; hour++) {
      hourId = hour < 24 ? hour : hour - 24;
      if (device.possibleHours.has(hourId) && hoursAll[hourId].power - device.power >= 0) {
        part.push(hoursAll[hourId]);
        if (part.length >= device.duration) {
          let price = 0;
          const hours = part.slice(-device.duration).map(hour => {
            price += hour.value;
            return hour.id;
          });
          chunksOfHours.push({ hours, price });
        }
      } else part = [];
    }
    return chunksOfHours;
  }

  static getPeriodsSortingByPrice(periods) {
    return periods.sort((a, b) => b.price - a.price === 0 ? b.hours[0] - a.hours[0] : b.price - a.price);
  }
};




