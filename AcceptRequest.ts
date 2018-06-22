import { DonationRequest } from './BloodRequest';

function acceptRequest(req: DonationRequest): boolean {
    let result: boolean = false;

    if (req.getReqUnits() < 5) {
        result = true
    }
    return result;
}

let dr = new DonationRequest("AB+", 4, "FortMalar", new Date());
let res = acceptRequest(dr);

if(res) {
    console.log(dr.toString());
    console.log("Available");
} else {
    console.log("Not Available");
}
