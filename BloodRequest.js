"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DonationRequest = /** @class */ (function () {
    function DonationRequest(reqGroup, reqUnits, reqHospital, requiredDate) {
        this.reqGroup = reqGroup;
        this.reqHospital = reqHospital;
        this.reqUnits = reqUnits;
        this.requiredDate = requiredDate;
    }
    DonationRequest.prototype.getReqUnits = function () {
        return this.reqUnits;
    };
    DonationRequest.prototype.toString = function () {
        return this.reqGroup + ", is needed in " + this.reqHospital;
    };
    return DonationRequest;
}());
exports.DonationRequest = DonationRequest;
//module.exports = DonationRequest;
