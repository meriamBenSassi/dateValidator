var Holidays = require('date-holidays');
var hd = new Holidays();
var _ = require('lodash');
hd.init('FR');

var assert = require('assert');
describe('isHoliday function', function() {

  it('should return an not empty object if the date is a holiday', function() {
    let holiday  = hd.isHoliday(new Date('2017-08-15 00:00:00 GMT+0000'));
    assert.equal(false, _.isEmpty(holiday));
  });

  it('should return false if the date is not a holiday', function() {
    let holiday  = hd.isHoliday(new Date('2017-08-16 00:00:00 GMT+0000'));
    assert.equal(false, holiday);
  });

});
