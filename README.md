
* To instaniate a DateValidator:

let dateValidator = new DateValidator(exludeWeekend, exludeHolidays, beginingTime, endingTime, country, state, region, opts);

exludeWeekend = true if weekd end's dates are considered as invalid

exludeHolidays = true if holidays' dates are considered as invalid

beginingTime & endingTime are an interval of hours in which the date is valid and must be in format: hh:mm  

State, region and ops are not required (https://www.npmjs.com/package/date-holidays)

Exemple:    

let dateValidator = new DateValidator(true, true, '8:00', '19:00', 'FR');

* To get the nextValidDate:

dateValidator.nextValidDate(new Date());

nextValidDate return the same date if it's a valid one.

* other functions:

isValidTime(time)

isValidDate(date)

isWeekend (date)
