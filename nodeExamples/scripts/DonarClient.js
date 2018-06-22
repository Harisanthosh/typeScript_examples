var restClient = require('node-rest-client').Client;

var client = new restClient();
var dataDonor = {
    "id": 4,
    "name": "Satish",
    "image": "image/satish.jpg"
};
var args = {
    data: dataDonor,
    headers: {"Content-Type": "application/json"}
}
client.post("http://localhost:3000/bloodDonors",args,function(data, resp){
    console.log("Successfully posted!")
    console.log(data);
    console.log(resp.statusCode);
});

// client.delete("http://localhost:3000/bloodDonors/4",args,function(data, resp){
//     console.log("Successfully posted!")
//     console.log(data);
//     console.log(resp.statusCode);
// });