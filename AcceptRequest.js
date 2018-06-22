"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BloodRequest_1 = require("./BloodRequest");
function acceptRequest(req) {
    var result = false;
    if (req.getReqUnits() < 5) {
        result = true;
    }
    return result;
}
var dr = new BloodRequest_1.DonationRequest("AB+", 4, "FortMalar", new Date());
var res = acceptRequest(dr);
if (res) {
    console.log(dr.toString());
    console.log("Available");
}
else {
    console.log("Not Available");
}
