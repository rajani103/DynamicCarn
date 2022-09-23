import axios from "axios";

// const baseUrl = 'http://localhost:8080/bookings-management';
//const baseUrl = 'http://13.235.16.107:8080/bookings-management';

const routeUrl = window.location.href
const url = routeUrl.slice(0,-6)
var ip = url.split('/')[2].split(':')[0];
const baseUrl = "http://"+ ip + ':8080/bookings-management';
console.log("RouteUrl > ",routeUrl)
console.log("IP > ",ip)
console.log(" Baseurl> ",baseUrl)

export const UploadCars = (vechNo) => {
    var data = {
        isSuccess: false,
        data:'',
    };
   return axios.get(`${baseUrl}/api/v4/getvehicleByVendor/`+ vechNo)
    .then( (response) => {
        data.isSuccess = true;
        data.data = response.data;
        return data
    } )
    .catch(err => {
        data.isSuccess = false;
        data.data = err
        return data
    })

}
