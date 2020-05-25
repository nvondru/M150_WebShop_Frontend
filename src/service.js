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
  static addProduct(name, price, url, desc) {
    return new Promise((resolve, reject) => {
      try {
        axios
          .post(baseUrl + "/add-product", {
            name,
            price,
            url,
            desc,
          })
          .then((response) => {
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
