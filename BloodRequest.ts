export class DonationRequest{
    private reqGroup: string;
    private reqUnits: number;
    private reqHospital: string;
    private requiredDate: Date;

    constructor(reqGroup:string, reqUnits:number, reqHospital:string, requiredDate:Date){
        this.reqGroup = reqGroup;
        this.reqHospital = reqHospital;
        this.reqUnits = reqUnits;
        this.requiredDate = requiredDate;
    }
    getReqUnits(){
        return this.reqUnits;
    }

    toString() {
        return `${this.reqGroup}, is needed in ${this.reqHospital}`
    }
}

//module.exports = DonationRequest;