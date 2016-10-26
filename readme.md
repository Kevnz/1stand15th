# 1stand15th

Get the 1st and 15th of the month for a year, or the 1st and 15th so far for the current year.

```
const fnf = require('1stand15th');
var year2016 = fnf(); 
// [ '2016-01-01','2016-01-15', '2016-02-01', '2016-02-15', ... ]
var year2015 = fnf(2015);
// [ '2015-01-01','2015-01-15','2015-02-01','2015-02-15','2015-03-01', '2015-03-15', ... ]
```
