import {
  SET_APP_NAME,
  SET_VEHICLE_SELECTED,
  SET_DATE_SELECTED,
  SET_AUTH_TOKEN,
  FETCH_USERS_SUCCEEDED,
  SET_USER_TYPE
} from "./constants";
import axios from "axios";
//const baseUrl = 'http://localhost:8080/user-service';
//const baseUrl = 'http://13.235.16.107:8080/user-service';

const routeUrl = window.location.href
const url = routeUrl.slice(0,-6)
var ip = url.split('/')[2].split(':')[0];
const baseUrl = "http://"+ ip + ':8080/user-service';
console.log("RouteUrl > ",routeUrl)
console.log("IP > ",ip)
console.log(" Baseurl> ",baseUrl)


export const setAppName = (payload) => {
  return { type: SET_APP_NAME, payload };
};

export const setSelectedVehicle = (payload) => {
  return { type: SET_VEHICLE_SELECTED, payload };
};

export const setDateSelected = (payload) => {
  return { type: SET_DATE_SELECTED, payload };
};

export const setAuthToken = (payload) => {
  localStorage.setItem("MyToken", payload)
  return { type: SET_AUTH_TOKEN, payload };
}

export const setUserType = (payload) => {
  localStorage.setItem("MyType", payload)
  return { type: SET_USER_TYPE, payload };
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users
  }
}

export const fetchUsers = (id) => {
  const type = localStorage.getItem("MyType");
  return function (dispatch) {
    axios
      .get(`${baseUrl}/api/v1/${type}/${id}`)
      .then(response => {
        const users = response.data;
        localStorage.setItem("MyProfile", JSON.stringify(users))
        dispatch(fetchUsersSuccess(users))
      })
      .catch(err => {
        alert(err.message)
      })
      
  }
}
