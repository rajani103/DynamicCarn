import axios from "axios";

//const baseUrl = 'http://localhost:8080/bookings-management';

//const baseUrl = 'http://13.235.16.107:8080/bookings-management';

const routeUrl = window.location.href
const url = routeUrl.slice(0,-6)
var ip = url.split('/')[2].split(':')[0];
const baseUrl = "http://"+ ip + ':8080/bookings-management';
console.log("RouteUrl > ",routeUrl)
console.log("IP > ",ip)
console.log(" Baseurl> ",baseUrl)

export const error = { status: "error" };

export const getVehicleDetails = async (vehicleNo) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/v4/getvehicledetails/${vehicleNo}`
    );
    if (response.status === 200 && response.data) {
      console.log("Insideeee")
      return response.data;}
    return error;
  } catch (err) {
    return error;
  }
};

export const getVehicleRatings = async (vehicleNo) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/v4/getratingCount/${vehicleNo}`
    );
    if (response.status === 200 && response.data) {
    return response.data;
  }
    return error;
  } catch (err) {
    return error;
  }
};


