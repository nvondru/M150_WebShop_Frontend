import axios from "axios";
let baseUrl = "http://localhost:5000";

class Service {
  static getProducts() {
    return new Promise((resolve, reject) => {
      try {
        axios.get(baseUrl + "/products").then((response) => {
          if (response.status === 200) {
            resolve(response.data);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default Service;
