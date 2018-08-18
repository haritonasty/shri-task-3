const fs = require('fs');
const { HourCell, Schedule } = require('./components/index');

module.exports = class Service {
  constructor() {
  }

  calculateBestTimeline(hours, remainingDevices) {
    const stackOfSchedules = [];
    if (remainingDevices.length > 0) stackOfSchedules.push(new Schedule(hours, remainingDevices)); else return hours;
    let schedule;
    let best = { hours: null, consumedEnergy: null };
    while (true) {
      schedule = stackOfSchedules.pop();
      if (schedule === undefined)
        if (best.price === null) throw new Error('При заданных maxPower и devices невозможно составить расписание!');
        else return best;
      else {
        const device = schedule.popDevice();
        const periods = HourCell.getPeriodsFilteringByPower(schedule.hours, device); // [ { hours, price } ]
        if (periods.length > 0)
          if (schedule.remainingDevices.length === 0) {
            const hours = schedule.addDevice(device, HourCell.getPeriodsSortingByPrice(periods).pop().hours).hours;
            const consumedEnergy = this.calculateEnergyValues(hours);
            if (best.consumedEnergy === null) best = { hours, consumedEnergy };
            else best = best.consumedEnergy.value > consumedEnergy.value ? { hours, consumedEnergy } : best;
          } else HourCell.getPeriodsSortingByPrice(periods)
            .forEach(period => {
              const hours = JSON.parse(JSON.stringify(schedule.hours));
              const remainingDevices = Array.from(schedule.remainingDevices);
              let newSchedule = new Schedule(hours, remainingDevices);
              stackOfSchedules.push(newSchedule.addDevice(device, period.hours));
            })
      }
    }
  }

  calculateEnergyValues(hours) {
    const devices = {};
    let value = 0;
    hours.forEach(h =>
      h.devices.forEach(d => devices[d.id] = devices[d.id] ? devices[d.id] + h.value * d.power : h.value * d.power));

    for (let id in devices) {
      devices[id] = Number((devices[id] / 1000).toFixed(3));
      value += devices[id];
    }
    value = Number(value.toFixed(3));
    return { value, devices };
  }


  createOutput({ hours, consumedEnergy }) {
    let schedule = {};
    for (let hour in hours) schedule[hour] = hours[hour].devices.map(d => d.id);
    const json = {};
    json['schedule'] = schedule;
    json['consumedEnergy'] = consumedEnergy;
    // fs.writeFile('src/data/output.json', json, 'utf8', err => {
    //   if (err) throw err;
    // });
    return json;
  }

};