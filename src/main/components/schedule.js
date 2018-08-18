module.exports = class Schedule {
  constructor(hours, devices) {
    this.hours = hours;
    this.remainingDevices = devices;
  }

  addDevice(device, hours) {
    for (let hour of hours) {
      this.hours[hour].devices = this.hours[hour].devices.concat(device);
      this.hours[hour].power -= device.power;
    }
    return this;
  }

  popDevice() {
    return this.remainingDevices.pop();
  }

};