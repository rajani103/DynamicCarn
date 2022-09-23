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


export const getCars = (getDetails) => {
    var data = {
        isSuccess: false,
        data:'',
    };
    const params = {
        location: getDetails.location,
        from: getDetails.from,
        to: getDetails.to
    }
   return axios.get(`${baseUrl}/api/v4/getallavailablevehicle`,{params})
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

export const FilterCars = (uploadData, dates) => {
    var data = {
        isSuccess: false,
        data:'',
    };

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        params: {
            from: dates.from,
            to: dates.to,
            veh: JSON.stringify(uploadData)
        }
    }
    return axios.get(`${baseUrl}/api/v4/getvehiclebyfilters`,config)
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
