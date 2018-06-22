var app = {};

app.simpleInterest = function(principle, years, rateOfInterest) {
    return (principle * years * rateOfInterest) / 100;
}


module.exports = app;