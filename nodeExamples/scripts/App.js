var calc = require('./InterestCalculator');
var conv = require('./CurrencyConverter').dollartoInr;
var amount = calc.simpleInterest(5000, 2, 30);
//var inramt = conv.dollartoInr(20);
var inramt = conv(20);
console.log("Conv amount is "+inramt);
console.log(amount);