var tap = require('tap');

Date.now = function () {
    console.log('monkey punch');
    return new Date(2015, 6, 4);
};

var f_n_f = require('../index');

var year2014 = f_n_f(2014);
var year2015 = f_n_f(2015);

tap.equal(year2014.length, 24);
tap.notEqual(year2014, year2015);
tap.notEqual(year2014.length, year2015.length);
tap.equal(year2015.length, 13);
tap.equal(year2015.pop(), '2015-07-01');