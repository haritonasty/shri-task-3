const input = require("./data/input");
const { Device, Rate, HourCell } = require('./components/index');
const Service = require('./service');


function main(input) {

  const maxPower = input.maxPower;
  const devices = Device.createDevices(input.devices);
  const rates = Rate.createRates(input.rates);

  const devices24 = Device.getDevices24(devices);
  const hours = HourCell.convertRatesToHoursConsiderDevices24(rates, maxPower, devices24);
  const remainingDevices = Device.getSortingRemainingDevices(devices); // by power (descending)

  const service = new Service();
  const bestTimeline = service.calculateBestTimeline(hours, remainingDevices);
  return service.createOutput(bestTimeline);
}


result = main(input);

module.exports = main;


