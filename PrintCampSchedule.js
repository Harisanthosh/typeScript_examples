"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printSchedule() {
    var camps = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        camps[_i] = arguments[_i];
    }
    camps.forEach(function (eachCamp) {
        console.log(eachCamp.location + ";" + eachCamp.name + ";" + eachCamp.contactNumber);
    });
}
var camp1 = {
    name: "Siraj", organization: "School of AI", contactNumber: 89372618123,
    location: "Los Angeles", reqDate: new Date()
};
var camp2 = {
    name: "Raval", organization: "Mason Robotics", contactNumber: 4563548741,
    location: "Los Angeles", reqDate: new Date()
};
var camp3 = {
    name: "Santhosh", organization: "Alpha Alloy", contactNumber: 12487430496,
    location: "California", reqDate: new Date()
};
printSchedule(camp1, camp2, camp3);
