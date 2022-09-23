import axios from "axios";

//const baseUrl = 'http://localhost:8080/authentication-service';
//const baseUrl = 'http://13.235.16.107:8080/authentication-service';


const routeUrl = window.location.href
const url = routeUrl.slice(0,-6)
var ip = url.split('/')[2].split(':')[0];
const baseUrl = "http://"+ ip + ':8080/authentication-service';
console.log("RouteUrl > ",routeUrl)
console.log("IP > ",ip)
console.log(" Baseurl> ",baseUrl)



export const loginUsers = (details) => {
    var data = {
        isSuccess: false,
        data:'',
    };
   return axios.post(`${baseUrl}/api/v2/login`, details)
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

