'use strict';

var ymd = require('year-month-day');

module.exports = function firstAndFifteenth (year) {

  var now = ymd(Date.now());
  var month = now.month;
  var day = now.day;
  var thisYear = now.year;
  var dateRange = [];
  if (!year) {
    year = thisYear;
  }

  if (thisYear === year) {
    for (var monthdex = 1; monthdex <= month; monthdex++) {
      dateRange.push(year+ '-' + (monthdex < 10 ? ('0'+ monthdex) : monthdex) + '-01');
      if (!((monthdex) === month && day < 15)) {
        dateRange.push(year+ '-' + (monthdex < 10 ? ('0'+ monthdex) : monthdex) + '-15');
      }
    }
  } else {
    for (var index = 1; index <= 12; index++) {
      dateRange.push(year+ '-' + (index < 10 ? ('0'+ index) : index) + '-01');
      dateRange.push(year+ '-' + (index < 10 ? ('0'+ index) : index) + '-15');
    }
  }
  return dateRange;
}
