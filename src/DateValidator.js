var Holidays = require('date-holidays');
var moment = require('moment');
var hd = new Holidays();

class DateValidator {

  constructor(beginingTime, endingTime, country, state, region, opts) {
    hd.init(country, state, region, opts);

    let validBeginingTime = moment(beginingTime, 'HH:mm').isValid();
    let validEndingTime = moment(endingTime, 'HH:mm').isValid();
    let validInterval = moment(beginingTime, 'HH:mm').isBefore(moment(endingTime, 'HH:mm'));

    if (!validBeginingTime || !validEndingTime || !validInterval) {
      throw new Error('INVALID_PARAMETERS');
    }

    this.beginingTime = beginingTime;
    this.endingTime = endingTime;
  }

  isValidTime(time) {
    if (!moment(time, 'HH:mm').isValid()) {
      throw new Error('INVALID_PARAMETERS');
    }

    let timeAfterBegining =  moment(time, 'HH:mm').isSameOrAfter(moment(this.beginingTime, 'HH:mm'));
    let timeBeforeEnding = moment(time, 'HH:mm').isSameOrBefore(moment(this.endingTime, 'HH:mm'));
    let isValidTime = timeAfterBegining && timeBeforeEnding;
    return (isValidTime);
  }

  isValidDate(date) {
    if (!moment(date).isValid()) {
      throw new Error('INVALID_PARAMETERS');
    }
    let time = moment(date).format('HH:mm') ;
    if (!hd.isHoliday(date) && this.isValidTime(time)) {
      return true;
    }
    return false;
  }

  nextValidDate(date) {

    if (!moment(date).isValid()) {
      throw new Error('INVALID_PARAMETERS');
    }

    if (this.isValidDate(date)) {
      return date;
    }

    while (!this.isValidDate(date)) {
      date = moment(date).add(1, 'days').format();
    }

    let hours = moment(this.beginingTime, 'HH:mm').hours();
    let minutes = moment(this.beginingTime, 'HH:mm').minutes();
    date = moment(date).hours(hours).format();
    date = moment(date).minutes(minutes).format();

    return date;
  }
}

module.exports = DateValidator;
