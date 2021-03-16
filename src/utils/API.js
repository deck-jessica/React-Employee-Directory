import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=75";

// Export an object containing employees from "company" : randomly generated employees from API call

export default {
    getEmployees: function() {
        return axios.get(BASEURL);
    }

//   getRandomDog: function() {
//     return axios.get("https://dog.ceo/api/breeds/image/random");
//   }
  
};
